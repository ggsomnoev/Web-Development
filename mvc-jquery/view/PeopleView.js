class PeopleView {
    constructor() {
        let showAllBtn = $('<button id="showAllRecords">Show all</button>');
        let addBtn = $('<button id="add">Add</button>');

        $('#wrapper').append(showAllBtn);
        $('#wrapper').append(addBtn);
        $('#wrapper').append($('<div id="content"></div>'));
    }

    getPeople(data) {
        $('#content').empty();
        let table = $(`
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                </table>`)
        let tbody = $('<tbody>');
        data.forEach(function (person, id) {
            tbody.append(
                $(`<tr>
                    <td>${id + 1}</td>
                    <td>${person.title}</td>
                    <td>${person.author}</td>
                    <td>${person.content}</td>
                </tr>`));
        });
        $('#content').append(table.append(tbody));
    }

    getPerson(data) {
        console.log(data);
        //draw specific person
    }

    addPersonView() {
        $('#content').empty();
        let personal = $(`
            <form id="userData">
                <label>Title</label>
                <input id="title" type="text" /><br/>
                <label>Author</label>
                <input id="author" type="text" /><br/>
                <label>Content</label>
                <textarea id="content" rows="10" cols="40"></textarea><br/>
                <button type="submit">Add</button>
            </form>`);


        $('#content').append(personal);
    }

}