import superagent from 'superagent';
import url from 'url';

class Api {
    constructor(url) {
        this.apiPath = url;
    }
    login(loginRequest, onSuccess, onFailure) {
        if (loginRequest.name == null || loginRequest.nickname == null) {
            return onFailure();
        }

        superagent
            .get(url.resolve(this.apiPath, `authenticate.php?name=${loginRequest.name}&nickname=${loginRequest.nickname}`))
            .then(result => {
                let response = JSON.parse(result.text);

                if (response.type !== 'success') {
                    return onFailure();
                }

                onSuccess();
            })
    }
    sendMessage() {
        //
    }
}

export {Api}
