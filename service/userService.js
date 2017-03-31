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

        var sendObj = {
            aut : false
        }
        userObj.username = userObj.username.trim();

        //验证数据是否合法
        if(!testName(userObj.username)){
            sendObj.txt = "用户名不合法";
        }else if(!testPwd(userObj.username)){
            sendObj.txt = "密码不合法";
        }

        res.json(sendObj);
    }
};

/**
 * 验证用户名是否合法(密码为4-20位字母或数字下划线)
 */
var testName = name => {
    var zz = /\w{4,20}/;
    return zz.test(name);
}

/**
 * 验证密码是否合法(不含空格且仅为6-20位数字字母或下划线)
 */
var testPwd = pwd => {
    var zz = /^\S\w{6,20}$/;
    return zz.test(pwd);
}

module.exports = userService;