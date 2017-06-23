let kinveyUrl = "https://baas.kinvey.com";
let appKey = "kid_HkIqCRJNx";
let appSecret = "b9c051fe6715461d8e660586b5dbbf66";

let requester = new Requester();
let header = getHeader(appKey, appSecret);
let url = kinveyUrl + "/appdata/" + appKey + '/people'

class PeopleModel {
    getPeople() {
        return requester.get(url, header);
    }
    getPerson(id) {
        return requester.get(url + '/' + id, header);
    }
    addPerson(data) {
        return requester.post(url, header, data);
    }
}