import {PersonParts} from './classes.js';

export async function parser (uri) {

        let data;

       await fetch(uri)
        .then(response => response.json())
        .then(val => data = val);


        let dto = new PersonParts();

        for (let i = 1; i <= data.surname.count; i++) {
            dto.surname.push(data.surname.list[`id_${i}`]);
        };

        for (let i = 1; i <= data.firstNameMale.count; i++) {
            dto.firstName_M.push(data.firstNameMale.list[`id_${i}`]);
        };

        dto.firstName_F = data.firstNameFemale;
        dto.patronymic_M = data.patronymicMale;
        dto.patronymic_F = data.patronymicFemale;
        dto.profession_M = data.professionMale;
        dto.profession_F = data.professionFemale;

        return dto;
}