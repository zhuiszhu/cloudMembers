/**
 * 验证用户名是否合法(密码为4-20位字母或数字下划线)
 */
var testName = function(name) {
    var zz = /\w{4,20}/;
    return zz.test(name);
}

/**
 * 验证密码是否合法(不含空格且仅为6-20位数字字母或下划线)
 */
var testPwd = function(pwd){
    var zz = /^\w{6,20}$/;
    return zz.test(pwd);
}

/**
 * 验证邮箱是否合法
 */
var testEmail = function(eml){
    var zz = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
    return zz.test(eml);
}

/**
 * 传入指定的from模块jq Dom对象,最终检测所有的值是否合法,只有当所有的值合法时才返回true
 */
var testAll = function(forDom){
    var isAut = true;
    var pwdVal = "";

    forDom.find(".form-module").each(function(){
        var did = $(this).attr("id");
        var inVal = $(this).find("input").val();

        switch(did){
            case "username":
                if(!testName(inVal)){
                    isAut = false;
                }
                break;
            case "password":
                if(!testPwd(inVal)){
                    isAut = false;
                }else{
                    pwdVal = inVal;
                }
                break;
            case "password1":
                if(!testPwd(inVal) || pwdVal != inVal){
                    isAut = false;
                }
                break;
            case "email":
                if(!testEmail(inVal)){
                    isAut = false;
                }
                break;
        }

    });

    return isAut;
}