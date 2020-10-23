import superagent from 'superagent';
import url from 'url';
import User from './data/User';
import CurrentUser from './data/CurrentUser';
import UsersList from './data/UsersList';

class Api {
    constructor(url) {
        this.apiPath = url;
    }
    getUsersList(onSuccess, onFailure) {
        superagent
            .get(url.resolve(this.apiPath, 'users_list.php'))
            .then(result => {
                let response = JSON.parse(result.text);

                if(response.status !== 'success') {
                    return onFailure();
                }

                let users = [];

                response.data.forEach(user => {
                    users.push(new User(
                        user.id,
                        user.name,
                        user.nickname,
                        user.created_at
                    ));
                });

                onSuccess(new UsersList(users));
                
            })
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

                onSuccess(
                    new CurrentUser(loginRequest.name, loginRequest.nickname)
                );
            })
    }
    sendMessage() {
        //
    }
}

export {Api}
