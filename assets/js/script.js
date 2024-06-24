import {parser} from './parser.js';
import {generator} from './generator.js';

const pers_fullname = document.querySelector('#pers_fullname');
const pers_prof = document.querySelector('#pers_prof');
const pers_gender = document.querySelector('#pers_gender');
const pers_birthday = document.querySelector('#pers_birthday');
const pers_img = document.querySelector('#pers_img');

document.querySelector('#action_generate').onclick = () => generate();
document.querySelector('#action_clear').onclick = () => clear();

const parts = await parser("./assets/js/data.json");

generator.init(parts);

generate();



function generate() {
    update(generator.createPerson());
}

function clear() {
    update(generator.getEmptyPerson());
}

function update(pers) {
    if (pers.gender === 0) {
        pers_fullname.innerHTML = '<br>';
        pers_prof.innerHTML = '<br>';
        pers_gender.innerHTML = '<br>';
        pers_birthday.innerHTML = '<br>';
    } else {
        pers_fullname.innerHTML = `${pers.surname} ${pers.firstName} ${pers.patronymic}`;
        pers_prof.innerHTML = pers.profession;
        pers_gender.innerHTML = `пол: ${pers.genderCaption}`;
        pers_birthday.innerHTML = `${pers.birthCaption} ${pers.birthDay}`;
    }

    pers_img.src = './assets/images/' + pers.image;
}

