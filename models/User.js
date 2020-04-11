module.exports = class User {
    constructor(id, optionalFields) {
        this.id = id;
        this.nickname = optionalFields.nickname;
        this.firstName = optionalFields.firstName ? optionalFields.firstName : null;
        this.lastName = optionalFields.lastName ? optionalFields.lastName : null;
        this.email = optionalFields.email ? optionalFields.email : null;
    }
}

