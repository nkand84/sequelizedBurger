var express = require("express");
var db = require("./../models");
var router = express.Router();

router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
        // res.json(results);
        res.render("index");
    });

});
// create new burger
router.post("/api/burgers", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
        
    }).then(function (result) {
        res.json(result);
    });
});
// update devoured state
router.put("/api/burgers/:id", function (req, res) {
    db.Burger.update({
        devoured: true,
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json(result);
    });
});







// Export routes for server.js to use.
module.exports = router;