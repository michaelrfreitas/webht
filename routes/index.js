var express = require("express");
var router = express.Router();
var db = require("../db");

var Touch = db.Mongoose.model("touch", db.TouchSchema, "touch");

/* ----------------------------            GET Section            --------------------------------------------*/

/* ----------------------------            Publish routers        --------------------------------------------*/
router.get("/", function (req, res, next) {
  res.render("home_en_uk");
});

router.get("/en_uk", function (req, res, next) {
  res.render("home_en_uk");
});

router.get("/en_us", function (req, res, next) {
  res.render("home_en_us");
});

router.get("/pt", function (req, res, next) {
  res.render("home_pt");
});

router.get("/es", function (req, res, next) {
  res.render("home_es");
});

/* ----------------------------            POST Section            --------------------------------------------*/

/* ----------------------------      Action routers save in Database      --------------------------------------------*/
router.post("/senduk", function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var date = new Date();
  var language = "English";

  var person = new Touch({
    name: name,
    email: email,
    date: date,
    language: language,
  });

  person.save(function (err) {
    if (err) {
      console.log("Error! " + err.message);
      res.send(err.message);
      return err;
    } else {
      console.log("Post saved");
      res.redirect("/");
    }
  });
}
);

router.post("/sendus", function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var date = new Date();
  var language = "English";

  var person = new Touch({
    name: name,
    email: email,
    date: date,
    language: language,
  });

  person.save(function (err) {
    if (err) {
      console.log("Error! " + err.message);
      res.send(err.message);
      return err;
    } else {
      console.log("Post saved");
      res.redirect("/en_us");
    }
  });
}
);

router.post("/sendes", function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var date = new Date();
  var language = "Spanish";

  var person = new Touch({
    name: name,
    email: email,
    date: date,
    language: language,
  });

  person.save(function (err) {
    if (err) {
      console.log("Error! " + err.message);
      res.send(err.message);
      return err;
    } else {
      console.log("Post saved");
      res.redirect("/es");
    }
  });
}
);

router.post("/sendpt", function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var date = new Date();
  var language = "Portuguese";

  var person = new Touch({
    name: name,
    email: email,
    date: date,
    language: language,
  });

  person.save(function (err) {
    if (err) {
      console.log("Error! " + err.message);
      res.send(err.message);
      return err;
    } else {
      console.log("Post saved");
      res.redirect("/pt");
    }
  });
}
);

module.exports = router;
