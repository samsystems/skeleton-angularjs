describe('The login page', () => {

    describe('Authentication capabilities', () => {

        let loginURL;
        const email = element(by.name('identity'));
        const password = element(by.name('credential'));
        const loginButton = element(by.name('submit'));
        const error = element(by.model('vm.loginError'));

        it('should redirect to the login page if trying to ' +
            'load protected page while not authenticated', function() {
            browser.get('/#/login');
            loginURL = browser.getCurrentUrl();
            browser.get('/#/');
            expect(browser.getCurrentUrl()).toEqual(loginURL);
        });

        it('should warn on missing/malformed credentials', function() {
            email.clear();
            password.clear();
            password.sendKeys('test');
            loginButton.click();
            expect(error.getText()).toMatch('Invalid email/password combination.');

            email.sendKeys('@example.com');
            password.clear();
            loginButton.click();
            expect(error.getText()).toMatch('Invalid email/password combination.');
        });

        it('should accept a valid email address and password', function() {
            email.clear();
            password.clear();
            email.sendKeys('test@example.com');
            password.sendKeys('test');
            loginButton.click();
            expect(browser.getCurrentUrl()).toEqual(loginURL);
            expect(error.getText()).toMatch('');
        });

        it('should return to the login page after logout', function() {
            // let logoutButton = $('a.logout');
            // logoutButton.click();
            expect(browser.getCurrentUrl()).toEqual(loginURL);
        });
    });
});
