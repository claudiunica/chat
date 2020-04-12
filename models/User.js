module.exports = class User {
    constructor(id, optionalFields) {
        this.id = id;
        if (optionalFields) {
            this.nickname = optionalFields.nickname ? optionalFields.nickname : null;
            this.firstName = optionalFields.firstName ? optionalFields.firstName : null;
            this.lastName = optionalFields.lastName ? optionalFields.lastName : null;
            this.email = optionalFields.email ? optionalFields.email : null;
        }
    }

    setNickname(nickname) {
        this.nickname = nickname;
    }

    setFirstName(firstName) {
        this.firstname = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setEmail(email) {
        this.email = email;
    }
}