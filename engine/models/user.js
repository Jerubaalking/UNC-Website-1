const Role = require('./role');
class User{
    constructor(
        fullname='fullname'||String(), 
        email='email'||String(), 
        password='password'||String(),
        phone='phone'||String(), 
        active=false||Boolean(),
        deleted=false||Boolean(),
        roleId = Number()){
        this.fullname = fullname;
        this.email =email;
        this.password = password;
        this.phone = phone;
        this.active = active;
        this.deleted = deleted;
        this.roleId = roleId
    }
}
class UserRole extends Role{
    constructor(fullname='fullname'||String(), email='email'||String(), password='password'||String(),phone='phone'||String(), active=false||Boolean(),deleted=false||Boolean(),roleId = Number()){
        super();
        this.fullname = fullname;
        this.email =email;
        this.password = password;
        this.phone = phone;
        this.active = active;
        this.deleted = deleted;
        this.roleId = roleId
    }
}
module.exports = {User, UserRole};
