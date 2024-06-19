export const parser =  {

    data: '',

    load: function(uri) {

        // fetch(uri)
        // .then(response => response.json())
        // .then(data => console.log(data));


        fetch(uri)
        .then(response => response.json())
        .then(function(data) {
            this.data = data;
        });

        return this.data;
    }

}