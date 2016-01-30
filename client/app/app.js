import '../assets/styles/index.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.config.js';
import homeModule from './components/home/home.module.js';
import loginModule from './components/login/login.module.js';

export default angular
    .module('skeletonAngularJs', [
        uiRouter,
        homeModule.name,
	loginModule.name
    ])
    .config(routing)
;
