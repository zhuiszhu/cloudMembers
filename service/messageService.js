var db = require("../db/dbPool");
var event = require("../functions/publicEvent");

var messageService = {
    messagePage: (req, res) => {//信息页面
        console.log(req.session.userObj);
        if (req.session.userObj) {
            res.render("index", {
                page: "messagePage",
                title: "聊天室",
                username : req.session.userObj[0].username,
                friends : [
                    {
                        username : "abc123",
                        id : "123"
                    },
                    {
                        username : "aaa123",
                        id : "12"
                    },
                    {
                        username : "aaa",
                        id : "1"
                    },
                ],
                friendName : null
            });
        } else {
            res.redirect("/users/login");
        }
    }
};

module.exports = messageService;