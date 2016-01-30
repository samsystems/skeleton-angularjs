export default class LoginController {
    constructor(loginService) {
        this.credentials = {
            email: 'test@example.com',
            password: 'temp1'
        };

        this.user = 'User';
        this.loginService = loginService;
    }

    login() {
        console.log('User Logged In.');
        if (!this.credentials.email || !this.credentials.password) {
            this.loginError = 'Invalid email/password combination.';
        }
    }
}

LoginController.$inject = ['LoginService'];
