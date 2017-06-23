function makeRequest(method, url, header, data) {
    let request = {
        method: method,
        url: url,
        headers: header
    }

    if(data != null) {
        request.data = JSON.stringify(data);
        request.headers["Content-Type"] = 'application/json';
    }

    return $.ajax(request);
}

class Requester {
    get(url, header) {
        return makeRequest('GET', url, header, null);
    }

    post(url, header, data) {
        return makeRequest('POST', url, header, data);
    }

    put() {

    }

    delete() {

    }
}