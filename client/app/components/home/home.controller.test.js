import { expect } from 'chai';

import HomeController from './home.controller.js';

let component;

describe('HomeController', function() {

    beforeEach(() => {
        component = new HomeController();
    });

    it('should start with default title = Welcome', () => {
        expect(component.title).to.equal('Welcome');
    });

});
