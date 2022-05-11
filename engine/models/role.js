class Role{
    constructor(role='role'|| String(), description='description'|| String(), active=true||Boolean(), deleted=false||Boolean()){
        this.role = role;
        this.description = description;
        this.active = active;
        this.deleted = deleted
    }
}
module.exports = Role;