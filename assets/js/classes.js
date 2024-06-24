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
    gender = 0;
    genderCaption = '';
    surname = '';
    firstName = '';
    patronymic = '';
    birthCaption = '';
    profession = '';
    image = '';
}