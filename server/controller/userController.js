var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var User = require("../Model/User");

SECRET_KEY="qwerty"
var userController = {};

// register user
userController.register = (req, res) => {
  let { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please fill all field" });
  }
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "user already exist" });

    const newUser = new User({
      name,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            SECRET_KEY,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
};


// login user
userController.login = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "please fill all field" });
  }
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "user does not exist" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        SECRET_KEY,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
};


userController.getUser = function (req, res) {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user))
    .catch((err) => {
      res.json({
        msg: "error",
      });
    });
};


userController.allUsers =async(req,res)=>{
  try{
    await User.find({}, (err, user) => {
      var trackMap = [];
      user.forEach(function (user) {
        trackMap = [...trackMap, ...user.trackingEvent];
      });
      res.send(trackMap);
    });
  }
  catch(err){
  console.log(err)
  }
}
module.exports = userController;
