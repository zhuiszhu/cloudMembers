(function(){
    var loginModule = $("#registerModule"),//form对象
        userObj = {},//用户信息
        usernameDom = $("#username"),//username模块Dom
        passwordDom = $("#password");//password模块Dom
        passwordDom = $("#email");//email模块Dom
    
    //注册提交事件
    loginModule.on("submit" , function(e){
        e.preventDefault();

        userObj.username = usernameDom.find("input").val();
        userObj.password = passwordDom.find("input").val();
        userObj.email = passwordDom.find("input").val();

        //提交用户信息
        $.ajax({
            url : "/ajax/users/register",
            data : userObj,
            type : "post",
            success : function(data){
                console.log(data);
            }
        })

    });
})();