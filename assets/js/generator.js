import {PersonParts} from './classes.js';

export const generator = {
    dto: PersonParts,

    init: function(dto) {
        this.dto = dto;
    },

    getEmptyPerson: function() {
        return {
            gender: '',
            surname: '',
            firstName: '',
            patronymic: '',
            birthDay: '',
            profession: '',
            image_index: 0
        };
    },

    createPerson: function() {
        const person = this.getEmptyPerson();

        if (data) {


        } else {
            return person;
        }
    }
}