class LoginService {
    constructor() {
        this.token = '123';
    }

    getToken() {
        return this.token;
    }

    changeToken($newToken) {
        this.token = $newToken;
    }
}

export default angular.module('services.login-service', [])
    .service('LoginService', LoginService)
    .name;
