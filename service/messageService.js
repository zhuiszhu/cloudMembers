var db = require("../db/dbPool");
var event = require("../functions/publicEvent");

var messageService = {
    messagePage: (req, res) => {//信息页面
        console.log(req.session.userObj);
        if (req.session.userObj) {
            res.render("index", {
                page: "messagePage",
                title: "聊天室"
            });
        } else {
            res.redirect("/users/login");
        }
    }
};

module.exports = messageService;