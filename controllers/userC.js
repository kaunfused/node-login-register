const bcrypt = require("bcrypt");
const user_model = require("../models/user");

class UserController {
  static home = (req, res) => {
    res.render("index");
  };

  static createUserDoc = async (req, res) => {
    const hashpass = await bcrypt.hash(req.body.password, 10);

    try {
      const doc = new user_model({
        name: req.body.name,
        email: req.body.email,
        password: hashpass,
      });

      await doc.save();
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  static verifyUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await user_model.findOne({ email });

      if (result === null) {
        res.send("<h1>Not a registered user</h1>");
      }

      const isMatch = await bcrypt.compare(password, result.password);

      if (result && isMatch) {
        res.send(`<h1>Hello there ${result.name}!</h1>`);
      } else {
        res.send("<h1>incorrect email or password</h1>");
      }
    } catch (error) {
      console.log(error);
    }
  };

  static register = (req, res) => {
    res.render("registration");
  };

  static login = (req, res) => {
    res.render("login");
  };
}

module.exports = UserController;
