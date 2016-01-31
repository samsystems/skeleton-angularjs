import uiRouter from 'angular-ui-router';

import routing from './login.routes';
import LoginController from './login.controller';

import LoginService from './login.service';

export default angular.module('skeletonAngularJs.login', [uiRouter, LoginService])
    .config(routing)
    .controller('LoginController', LoginController);
