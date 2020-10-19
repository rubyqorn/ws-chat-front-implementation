import superagent from 'superagent';
import url from 'url';

class FakeApi {
    constructor(url) {
        this.apiPath = url;
    }
    login(loginRequest, onSuccess, onFailure) {
        if (loginRequest.name !== null || loginRequest.nickname !== null) {
            return onSuccess();
        }

        onFailure();
    }
    sendMessage() {
        //
    }
}

export {FakeApi}
