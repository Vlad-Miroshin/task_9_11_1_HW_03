import {PersonParts} from './classes.js';

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
        return {
            gender: 0,
            genderCaption: '',
            surname: '',
            firstName: '',
            patronymic: '',
            birthCaption: '',
            birthDay: '',
            profession: '',
            image: 'unknown.png'
        };
    },

    createPerson: function() {
        const person = this.getEmptyPerson();

        if (this.parts) {
            person.gender = getRandomItem(GENDERS);
            person.birthDay = getRandomBirthDay();

            if (person.gender === 1) {
                person.genderCaption = "мужской",
                person.surname = getRandomItem(this.parts.surname),
                person.firstName = getRandomItem(this.parts.firstName_M),
                person.patronymic = getRandomItem(this.parts.patronymic_M),
                person.birthCaption = "родился",
                person.profession = getRandomItem(this.parts.profession_M),
                person.image = getRandomItem(IMG_MALE)
            } 
            else 
            {
                person.genderCaption = "женский",
                person.surname = feminizeSurname(getRandomItem(this.parts.surname)),
                person.firstName = getRandomItem(this.parts.firstName_F),
                person.patronymic = getRandomItem(this.parts.patronymic_F),
                person.birthCaption = "родилась",
                person.profession = getRandomItem(this.parts.profession_F),
                person.image = getRandomItem(IMG_FEMALE)
            }
        }
            
        return person;
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



