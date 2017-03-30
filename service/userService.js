var userService = {
    loginPage : (req , res) => {//登录页面
        res.render("index" , {
            page : "loginPage",
            title : "message-登录页面"
        });
    },
    login : (req ,res) => {//登录请求
        res.json({code : 2, txt : "恭喜登录成功"});
    }
};

module.exports = userService;