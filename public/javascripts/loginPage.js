(function(){
    var loginModule = $("#loginModule"),//form对象
        userObj = {},//用户信息
        usernameDom = $("#username"),//username模块Dom
        passwordDom = $("#password");//password模块Dom
    
    //注册提交事件
    loginModule.on("submit" , function(e){
        e.preventDefault();

        userObj.username = usernameDom.find("input").val();
        userObj.password = passwordDom.find("input").val();

        $.ajax({
            url : "/ajax/users/login",
            data : userObj,
            type : "post",
            success : function(data){
                console.log(data);
            }
        })

    });
})();