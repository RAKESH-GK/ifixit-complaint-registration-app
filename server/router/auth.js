const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Authenticate = require('../middleware/authenticate');
const User = require('../model/Schema');
const Complaint = require('../model/ComplaintSchema');
const cookieParser = require('cookie-parser');
const Authority = require('../model/Authority');
const ObjectID = require('mongodb').ObjectID;

router.use(cookieParser());

//connecting database 
require('../db/connection');


router.get('/getdata', Authenticate, (req, res) => {
    res.send(req.rootUser);
})

router.put('/getuser', async (req, res) => {
    try {
        const { email } = req.body;
        const data = await User.findOne({ email: email });
        if (data) {
            res.send(data);
        }
    } catch (err) {
        console.log(err);
    }
})

router.put('/getmycomplaints', async (req, res) => {
    try {
        const { userid } = req.body;
        const data = await Complaint.find({ userid: userid });
        if (data) {
            res.send(data);
        }
    } catch (err) {
        console.log(err);
    }
})

router.get('/allcomplaints', async (req, res) => {
    try {
        const data = await Complaint.find();
        if (data) {
            res.send(data)
        } else {
            return res.status(422).json({ error: "No data found" });
        }
    } catch (err) {
        console.log(err);
    }
})
router.get('/getcounts', async (req, res) => {
    try {
        const total = await Complaint.find();
        const processing = await Complaint.find({ status: "processing" });
        const solved = await Complaint.find({ status: "completed" });
        return res.status(200).send({ total: total, processing: processing, solved: solved });
    } catch (err) {
        console.log(err);
    }
})

router.post('/register', async (req, res) => {
    console.log(req.body);
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email already exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password not matching" });
        } else {
            const user = new User({ name, email, phone, password, cpassword });
            await user.save();
            res.status(201).json({ message: "user registered succesfully" });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/authregister', async (req, res) => {
    const { authid, password } = req.body;
    if (!authid || !password) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    try {
        const authExist = await User.findOne({ authid: authid });
        if (authExist) {
            return res.status(422).json({ error: "id already exist" });
        } else {
            const auth = new Authority({ authid, password });
            await auth.save();
            res.status(201).json({ message: "registered succesfully" });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/complaint', async (req, res) => {
    console.log(req.body);
    const { userid, problem, proofimage, address, landmark, city, pincode, description } = req.body;
    if (!userid || !problem || !proofimage || !address || !landmark || !city || !pincode || !description) {
        return res.status(400).json({ error: "Please fill all fields" })
    }
    try {
        const complaint = new Complaint({ userid, problem, proofimage, address, landmark, city, pincode, description });
        await complaint.save();
        res.status(201).json({ message: "Complaint registered succesfully" });
    } catch (err) {
        console.log(err);
    }
})

router.post('/authlogin', async (req, res) => {
    try {
        const { authid, password } = req.body;
        if (!authid || !password) {
            return res.status(422).json({ error: "Please fill all fields" });
        }
        const authExist = await Authority.findOne({ authid: authid })
        if (authExist) {
            if (authExist.password === password) {
                res.status(201).json({ message: "Login successfull" });
            } else {
                res.status(422).json({ error: "Invalid credentials" });
            }
        }
    } catch (err) {
        console.log(err);
    }
})

router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please fill all details" });
        }
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            const isMatch = await bcrypt.compare(password, userExist.password);
            token = await userExist.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (isMatch) {
                res.status(201).json({ message: "Login sucsessfull" });
            } else {
                res.status(400).json({ error: "invalid credentials" });
            }
        } else {
            res.status(400).json({ error: "user not found" });
        }
    } catch (err) {
        console.log(err);
    }
});

// router.post('/contact', Authenticate, async (req, res) => {
//     try {
//         const { name, email, phone, message } = req.body;
//         if (!name || !email || !phone || !message) {
//             return res.status(400).json({ error: "Please fill message" });
//         }
//         const userContact = await User.findOne({ _id: req.userID });
//         if (userContact) {
//             await userContact.addMessage(name, email, phone, message);
//             await userContact.save();
//             return res.status(200).json({ message: "Message sent successfully" });
//         }

//     } catch (err) {
//         console.log(err);
//     }
// })

router.put('/updatecomplaint', async (req, res) => {
    try {
        const { complaintid, status } = req.body;
        if (!complaintid) {
            return res.status(400).json({ error: "Something went wrong" });
        }
        const complaint = await Complaint.findOne({ _id: complaintid });
        console.log(complaint._id);
        if (complaint) {
            const update = { $set: { status: status } };
            console.log(update);
            const result = await Complaint.updateOne({ '_id': complaint._id }, update);
            if (result) {
                return res.status(200).json({ message: "Work in Progress" });
            } else {
                return res.status(400).json({ error: "Something went wrong" });
            }
        } else {
            return res.status(400).json({ error: "Something went wrong" });
        }

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;