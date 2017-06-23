class PeopleController {
    constructor(model, view) {
        let _self = this;
        this.model = model;
        this.view = view;

        $('#showAllRecords').click(function () {
            _self.getPeople();
        })

        $('#add').click(function () {
            _self.view.addPersonView();
        });


        $('#userData').submit(function (event) {
            event.preventDefault();
            let userData = {title: $('#title').val(), author: $('#author').val(), content: $('#content').val()};
            _self.addPerson(userData);
        });
    }

    getPeople() {
        this.model.getPeople().then((peopleData) => {
            this.view.getPeople(peopleData);
        });
    }

    getPerson(id) {
        this.model.getPerson(id).then((personData) => {
            this.view.getPerson(personData);
        });
    }

    addPerson(data) {
        this.model.addPerson(data).then((response) => {
            this.getPeople();
            //console.log(response);
        });
    }
}