const express = require('express');
const User = require("../models/user");
const router = express.Router();



router.get("/", (req, res) => {
    User.find().then((users) => {
        res.json(users);
    });
});

router.get("/:id", (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user);
    });
});

router.put("/:id/password", (req, res) => {
    const newPassword = req.body.newPassword;
    const oldPassword = req.body.oldPassword;
    User.findByIdAndUpdate(req.params.id).then((user) => {
        if(user.password === oldPassword){
            user.password = newPassword;
            user.save();
            res.send("password saved");
            consle.log(`user: ${user.username} updated their password`);
        } else {
            res.send("password incorrect");
        }
    }).catch((err) => {
        console.log(err);
    });
});

router.get("/:id/delete", (req, res) => {
    const userId = req.params.id;
    User.findByIdAndRemove(userId).then(() => {
        console.log(`user ${userId} deleted their account :'(`);
        res.send("success");
    }).catch((err) => {
        console.log("no success");
        console.log(err);
    })
})
router.post("/login/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.find().then((users) => {
        const findUser = users.find((user) => {
            return user.username === username;
        });
        if (userIWant.password === password){
            res.json(findUser);
        } else {
            res.send("wrong password");
        }
        res.json(findUser);
    })
        .catch((err) => {
            res.send("can't not find username");
        })
})
router.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.image = image;

    newUser.save().then((user) => {
        res.json(user);
    }).catch((err) => {
        console.log(err);
    });
})

module.exports = router;
 