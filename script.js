const selin = {
    firstName: 'selin',
    lastName: 'durmaz',
    birthYear: 2004,
    job: 'student',
    friends: ['Buse', 'Ebru', 'Alp'],
    hasDriverLicense: false,

    calcAge: function () {
        return 2024 - this.birthYear;
    },

    mySummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old, and has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
    }
}

console.log(selin.mySummary());
