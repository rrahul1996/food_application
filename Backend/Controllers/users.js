const User = require('../Models/users')

exports.userLogin = (req, res) => {
    const {user, pwd} = req.body;
    User.find({
        username : user,
        password : pwd
    })
    .then(response => {
        let msg, auth ;
        if (response.length == 0) {
            msg = "User Not Authenticated Succesfully";
            auth = false;
        }
        else {
            msg = "User Authenticated Succesfully";
            auth = true;
        }
        res.status(200).json(
            {
                message : msg,
                user    : response,
                isAuthenticated : auth
            }
        )
    })
    .catch(err => {
        res.status(500).json({error : err})
    })
}

// User signUp

exports.userSignUp = (req, res) => {
    const {user, pwd, fn, ln} = req.body;
    console.log(req.body);
    const userObj = new User({
        username : user,
        password : pwd,
        firstName : fn,
        lastName : ln
    })

    User.find({
        username: user
    })
    .then(response => {
        if (response.length == 0) {
            userObj.save()
                .then(response => {
                    res.status(200).json(
                        {
                            message: "User Added Succesfully",
                            user: response
                        }
                    )
                })
        } else {
            res.status(200).json(
                {
                    message: "User Already exists..."
                }
            )
        }
    }).catch(err => {
        res.status(500).json({ error: err })
    })
}