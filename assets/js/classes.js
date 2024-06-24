export {PersonParts, Person}

class PersonParts {
    surname = [];
    firstName_M = [];
    firstName_F = [];
    patronymic_M = [];
    patronymic_F = [];
    profession_M = [];
    profession_F = [];
}

class Person {
    _gender = "1";

    constructor (gender) {
        this._gender = gender;
    };

    getGenderCaption() {
        return gender === "1" ? "Мужской" : "Женский";
    };

    getImageName() {

    }
}