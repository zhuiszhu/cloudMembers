var crypto = require("crypto");
var md5 = crypto.createHash("md5");

var encry = {
    pwd : pwd => {
        md5.update(pwd);
        return md5.digest("hex");
    }
}

module.exports = encry;