if (sessionStorage.getItem('authToken') == null) {
    sessionStorage.setItem("authToken", "ea68d49e-ddc6-49c3-9a42-4c5f66f72afe.0zCMbrBYmy+vBTtkVCZj2WYrEkaPxJ7uVIiZAVzzP8U=");
}

(function () {
    let router = Sammy(function () {
        let peopleView = new PeopleView();
        let peopleModel = new PeopleModel();

        let peopleController = new PeopleController(peopleModel, peopleView);

        this.get('#/', function () {
            let _size = this;
            $('#content').empty();
            $('#listAllPeople').click(function () {
                _size.redirect('#/list');
            });

            $('#add').click(function () {
                _size.redirect('#/add');
            });

        });

        this.get('#/list', function () {
            $('#content').empty();
            peopleController.getPeople();
        });

        this.get('#/add', function () {
            $('#content').empty();
            peopleView.addPersonView();

            $('#userData').submit(function (event) {
                event.preventDefault();
                let userData = {title: $('#title').val(), author: $('#author').val(), content: $('#cont').val()};
                peopleModel.addPerson(userData);
            });
        });

        this.get('#/book/:id', function () {
            $('#content').empty();
            peopleController.getPerson(this.params['id']);
        });

        this.bind('viewDetailed', function (ev, data) {
            this.redirect('#/book/' + data);
        });
    });
    router.run('#/');
})();

