import {Person, PersonParts} from './classes.js';

const GENDERS = [1, 2];

const IMG_MALE = [
    "male_1.png", "male_2.png", "male_3.png", 
    "male_4.png", "male_5.png"];

const IMG_FEMALE = [
    "female_1.png", "female_2.png", "female_3.png", 
    "female_4.png", "female_5.png"];

export const generator = {
    parts: PersonParts,

    init: function(parts) {
        this.parts = parts;
    },

    getEmptyPerson: function() {
        const pers = new Person();
        pers.gender = 0;
        pers.image = 'unknown.png'

        return pers;
    },

    createPerson: function() {
        const pers = this.getEmptyPerson();

        if (this.parts) {
            pers.gender = getRandomItem(GENDERS);
            pers.birthDay = getRandomBirthDay();

            if (pers.gender === 1) {
                pers.genderCaption = "мужской",
                pers.surname = getRandomItem(this.parts.surname),
                pers.firstName = getRandomItem(this.parts.firstName_M),
                pers.patronymic = getRandomItem(this.parts.patronymic_M),
                pers.birthCaption = "родился",
                pers.profession = getRandomItem(this.parts.profession_M),
                pers.image = getRandomItem(IMG_MALE)
            } 
            else 
            {
                pers.genderCaption = "женский",
                pers.surname = feminizeSurname(getRandomItem(this.parts.surname)),
                pers.firstName = getRandomItem(this.parts.firstName_F),
                pers.patronymic = getRandomItem(this.parts.patronymic_F),
                pers.birthCaption = "родилась",
                pers.profession = getRandomItem(this.parts.profession_F),
                pers.image = getRandomItem(IMG_FEMALE)
            }
        }
            
        return pers;
    }
}

function getRandomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

function getRandomItem(items) {
    return items[Math.round(Math.random() * (items.length - 1))];
}

function feminizeSurname(val) {
    return val + 'а';
}

function getMonthCaption(m) {
    switch (m) {
        case 1: return 'января';
        case 2: return 'февраля';
        case 3: return 'марта';
        case 4: return 'апреля';
        case 5: return 'мая';
        case 6: return 'июня';
        case 7: return 'июля';
        case 8: return 'августа';
        case 9: return 'сентября';
        case 10: return 'октября';
        case 11: return 'ноября';
        case 12: return 'декабря';
        default: return m.toString();
    }
}

function getRandomBirthDay() {
    const year = getRandomInt(1950, 2006);
    const dt = new Date(year, 1, 1);
    dt.setDate(dt.getDate() + getRandomInt(0, 365));

    const mm = getMonthCaption(dt.getMonth() + 1);
    
    return `${dt.getDate()} ${mm} ${dt.getFullYear()} г.`;
}



