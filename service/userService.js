var userService = {
    loginPage : (req , res) => {//登录页面
        res.render("index" , {
            page : "loginPage",
            title : "message-登录页面"
        });
    },
    login : (req ,res) => {//登录请求
        res.json({code : 2, txt : "恭喜登录成功"});
    },
    registerPage : (req , res) => {//登录页面
        res.render("index" , {
            page : "registerPage",
            title : "message-注册页面"
        });
    },
    register : (req , res) => {//注册请求
        var userObj = req.body;

        if(userObj.username){//用户名不存在

        }
    }
};

var testName = name => {
    
}

module.exports = userService;