(function () {
    var loginModule = $("#registerModule"),//form对象
        userObj = {},//用户信息
        usernameDom = $("#username"),//username模块Dom
        passwordDom = $("#password"),//password模块Dom
        password1Dom = $("#password1"),//password1模块Dom
        emailDom = $("#email");//email模块Dom

    //注册提交事件
    loginModule.on("submit", function (e) {
        e.preventDefault();

        userObj.username = usernameDom.find("input").val();
        userObj.password = passwordDom.find("input").val();
        userObj.email = passwordDom.find("input").val();

        //提交用户信息
        $.ajax({
            url: "/ajax/users/register",
            data: userObj,
            type: "post",
            success: function (data) {
                console.log(data);
            }
        })

    });

    usernameDom.find("input").on("change", function (e) {
        var username = $(this).val();

        if (!testName(username)) {//用户名不合法
            usnInfo("用户名不合法");
        } else {
            //提交用户名
            $.ajax({
                url: "/ajax/users/findUser",
                data: { username: username },
                type: "post",
                success: function (data) {
                    console.log(data);
                }
            })
        }

    });

    /**
     * 用户名模块显示提示信息
     */
    function usnInfo(txt, isTrue) {
        var infoD = usernameDom.find("info");
        oopClass(infoD , txt , isTrue);
    }

    /**
     * 密码模块显示提示信息
     */
    function pwdInfo(txt, isTrue) {
        var infoD = passwordDom.find("info");
        oopClass(infoD , txt , isTrue);
    }

    /**
     * 重复密码模块显示提示信息
     */
    function pwd1Info(txt, isTrue) {
        var infoD = password1Dom.find("info");
        oopClass(infoD , txt , isTrue);
    }

    /**
     * 邮箱模块显示提示信息
     */
    function emlInfo(txt, isTrue) {
        var infoD = emailDom.find("info");
        oopClass(infoD , txt , isTrue);
    }


    function oppClass(dom , txt , isTrue){
        dom.text(txt);
        if (!isTrue) {
            dom.addClass("err");
        } else {
            dom.removeClass("err");
        }
    }
})();