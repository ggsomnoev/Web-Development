function getHeader(appKey, appSecret) {
    let header = {};

    if (sessionStorage.getItem('authToken') != null) {
        return {"Authorization" : "Kinvey " + sessionStorage.getItem("authToken")}; //already logged in
    } else {
        return {"Authorization": "Basic " + btoa(appKey + ':' + appSecret)}; //login/register header
    }
}
