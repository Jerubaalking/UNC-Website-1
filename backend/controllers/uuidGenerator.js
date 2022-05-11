const crypto = require("crypto");

const RandomID = function(){
    return crypto.randomBytes(16).toString("hex");
}

module.exports = RandomID;