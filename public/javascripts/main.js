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
    console.log(eml);
    return zz.test(eml);
}