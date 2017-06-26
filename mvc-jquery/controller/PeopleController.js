class PeopleController {
    constructor(model, view) {
        let _self = this;
        this.model = model;
        this.view = view;
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