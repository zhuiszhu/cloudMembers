var userService = {
    loginPage : (req , res) => {
        res.render("index" , {
            page : "loginPage",
            title : "登录"
        });
    }
};

module.exports = userService;