var db = require("../db/dbPool");
var dbCon = require("../functions/projectConfig").db;
var event = require("../functions/publicEvent");
var jm = require("../functions/ecryption").pwd;

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
        }else if(!testEmail(userObj.email)){
            sendObj.txt = "邮箱不合法";
        }else{
            sendObj.aut = true;
        }

        if(!sendObj.aut){//信息不合法时像前端返回信息,并不执行插入数据操作
            res.json(sendObj);
        }else{//信息合法时,执行进一步操作
            sendObj.aut = false;

            //数据库连接失败
            event.removeAllListeners("DB_CONN_ERROR");
            event.on("DB_CONN_ERROR" , data => {
                console.log(`数据库连接失败,连接地址:${dbCon.connect},端口号:${dbCon.port},数据库名:${dbCon.dbname},具体信息如下:`);
                console.log(data);
                sendObj.txt = "服务器错误,请联系管理员";
                res.json(sendObj);
            });

            //数据库操作失败
            event.removeAllListeners("DB_OOP_ERROR");
            event.on("DB_OOP_ERROR" , data => {
                console.log(`数据库操作失败,连接地址:${dbCon.connect},端口号:${dbCon.port},数据库名:${dbCon.dbname},具体信息如下:`);
                console.log(data);
                sendObj.txt = "服务器错误,请联系管理员";
                res.json(sendObj);
            });

            //数据库操作成功
            event.removeAllListeners("DB_OOP_SUCCESS");
            event.on("DB_OOP_SUCCESS" , data => {
                var usr = null;
                if(data.oop == "find"){//查询成功
                    usr = data.info;
                    if(usr.length == 0){//用户名不存在,可用

                        /**
                         * 注册各种操作
                         */

                        userObj.password = jm(userObj.password);
                        userObj.date = new Date();
                        userObj.friends = [];

                        db.insert(userObj);//开始注册

                    }else{//用户名已存在,返回结果
                        sendObj.txt = "用户名已存在";
                        res.json(sendObj);
                    }
                }else if(data.oop == "insert"){//注册成功
                    sendObj.aut = true;
                    sendObj.txt = "注册成功!";
                    res.json(sendObj);
                }
            });

            db.find({username:userObj.username});

        }
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
    var zz = /^\w{6,20}$/;
    return zz.test(pwd);
}

/**
 * 验证邮箱是否合法
 */
var testEmail = eml => {
    var zz = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
    console.log(eml);
    return zz.test(eml);
}

module.exports = userService;