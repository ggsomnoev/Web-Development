function getHeader(appKey, appSecret) {
    if (sessionStorage.getItem('authToken') == null) {
        sessionStorage.setItem("authToken", "ea68d49e-ddc6-49c3-9a42-4c5f66f72afe.0zCMbrBYmy+vBTtkVCZj2WYrEkaPxJ7uVIiZAVzzP8U=");
        //sessionStorage.setItem("authToken", btoa('guest:guest'));
    }
    let header = {};

    if (sessionStorage.getItem('authToken') != null) {
        return {"Authorization" : "Kinvey " + sessionStorage.getItem("authToken")}; //already logged in
    } else {
        return {"Authorization": "Basic " + btoa(appKey + ':' + appSecret)}; //login/register header
    }
}
