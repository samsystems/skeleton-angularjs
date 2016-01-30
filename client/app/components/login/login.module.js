import uiRouter from 'angular-ui-router';

import routing from './login.routes';
import LoginController from './login.controller';

export default angular.module('skeletonAngularJs.login', [uiRouter])
    .config(routing)
    .controller('LoginController', LoginController);
