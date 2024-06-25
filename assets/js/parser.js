import {PersonParts} from './classes.js';

export async function parser (uri) {

       let data;

       await fetch(uri)
        .then(response => response.json())
        .then(val => data = val);


        let parts = new PersonParts();

        for (let i = 1; i <= data.surname.count; i++) {
            parts.surname.push(data.surname.list[`id_${i}`]);
        };

        for (let i = 1; i <= data.firstNameMale.count; i++) {
            parts.firstName_M.push(data.firstNameMale.list[`id_${i}`]);
        };

        parts.firstName_F = data.firstNameFemale;

        for (let i = 0; i < parts.firstName_M.length; i++) {
            parts.patronymic_M.push(createPatronymicMale(parts.firstName_M[i]));
        };
        
        for (let i = 0; i < parts.firstName_M.length; i++) {
            parts.patronymic_F.push(createPatronymicFemale(parts.firstName_M[i]));
        };

        parts.profession_M = data.professionMale;
        parts.profession_F = data.professionFemale;

        return parts;
}

function createPatronymicMale(firstName) {
    if (firstName.endsWith('й'))
        return firstName.slice(0, firstName.length - 1) + 'евич';
    else if (firstName.endsWith('слав'))
        return firstName + 'ич';
    else if (firstName.endsWith('а'))
        return firstName.slice(0, firstName.length - 1) + 'ович';
    else
        return firstName + 'ович';
}

function createPatronymicFemale(firstName) {
    if (firstName.endsWith('й'))
        return firstName.slice(0, firstName.length - 1) + 'евна';
    else if (firstName.endsWith('слав'))
        return firstName + 'на';
    else if (firstName.endsWith('а'))
        return firstName.slice(0, firstName.length - 1) + 'овна';
    else
        return firstName + 'овна';
}