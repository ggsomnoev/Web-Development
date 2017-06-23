import $ from 'jquery';

const KINVEY_BASE_URL = "https://baas.kinvey.com/";
const APP_ID = "kid_HkIqCRJNx";
const APP_SECRET = "b9c051fe6715461d8e660586b5dbbf66";
const KINVEY_AUTHORIZATION_HEADER = {Authorization: "Basic " + btoa(APP_ID + ':' + APP_SECRET)}
const USER_AUTHORIZATION_HEADER = {Authorization: "Kinvey " + sessionStorage.getItem('authToken')}
const URLS = {
    loginUrl: KINVEY_BASE_URL + "user/" + APP_ID + '/login',
    registerUrl: KINVEY_BASE_URL + "user/" + APP_ID,
    loadBooksUrl: KINVEY_BASE_URL + 'appdata/' + APP_ID + '/books/'
}


function ajaxRequester(method, url, headers, data) {
    return $.ajax({
        method: method,
        url: url,
        headers: headers,
        data: JSON.stringify(data),
        contentType: "application/json"
    });
}

let KinveyRequester = (function () {
    function login(loginData) {
        return ajaxRequester('POST', URLS.loginUrl, KINVEY_AUTHORIZATION_HEADER, loginData);
    }
    function register(registerData) {
        return ajaxRequester('POST', URLS.registerUrl, KINVEY_AUTHORIZATION_HEADER, registerData);
    }
    function loadBooks() {
        return ajaxRequester('GET', URLS.loadBooksUrl, USER_AUTHORIZATION_HEADER, {});
    }
    function createBook(bookData) {
        return ajaxRequester('POST', URLS.loadBooksUrl, USER_AUTHORIZATION_HEADER, bookData);
    }
    function editBook(bookId, newData) {
        return ajaxRequester('PUT', URLS.loadBooksUrl + bookId, USER_AUTHORIZATION_HEADER, newData);
    }
    function deleteBook(bookId) {
        return ajaxRequester('DELETE', URLS.loadBooksUrl + bookId, USER_AUTHORIZATION_HEADER, {});
    }

    return {
        login,
        register,
        loadBooks,
        createBook,
        editBook,
        deleteBook
    }
})();

export default KinveyRequester;