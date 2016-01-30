import { expect } from 'chai';

import LoginController from './login.controller.js';

let component;

describe('LoginController', function() {

    beforeEach(() => {
        component = new LoginController();
    });

    it('Login Controller should be loaded', () => {
        expect(component).to.not.be.undefined;
    });

    it('User should have credentials', () => {
        expect(component.credentials).to.not.be.undefined;
        expect(component.credentials.email).to.not.be.undefined;
        expect(component.credentials.password).to.not.be.undefined;
        expect(component.credentials).to.not.be.undefined;
    });
});
