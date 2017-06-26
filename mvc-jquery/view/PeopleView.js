class PeopleView {
    getPeople(data) {
        let table = $(`
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Content</th>
                            <th>_Id</th>
                            <th>Action</th>
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
                    <td>${person._id}</td>
                    <td><button id=${person._id} class="detailed-button">View Details</button></td>
                </tr>`));
        });
        $('#content').append(table.append(tbody));

        Sammy(function () {
            let _self = this;

            $('.detailed-button').click(function (ev) {
                _self.trigger('viewDetailed', $(this).attr('id'));//this reference to detailed-button
            });
        });
    }

    getPerson(data) {
        let html = $(`
            <div>
                <b>Title: </b>${data.title}
                <b>Author: </b>${data.author}
                <b>Content: </b>${data.content}
            </div>
        `);
        $('#content').append(html);
    }

    addPersonView() {
        let personal = $(`
            <form id="userData">
                <label>Title</label>
                <input id="title" type="text" /><br/>
                <label>Author</label>
                <input id="author" type="text" /><br/>
                <label>Content</label>
                <textarea id="cont" rows="10" cols="40"></textarea><br/>
                <button type="submit">Add</button>
            </form>`);


        $('#content').append(personal);
    }

}