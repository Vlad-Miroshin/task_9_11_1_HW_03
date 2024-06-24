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
        parts.patronymic_M = data.patronymicMale;
        parts.patronymic_F = data.patronymicFemale;
        parts.profession_M = data.professionMale;
        parts.profession_F = data.professionFemale;

        return parts;
}