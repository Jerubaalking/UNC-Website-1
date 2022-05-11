class Notification{
    constructor(status = new Boolean(), notification = String(), err = null){
        this.status = status || false;
        this.notification = notification || "Failed";
        this.details = err || null;
    }
}
module.exports = Notification;