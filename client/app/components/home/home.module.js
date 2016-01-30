import uiRouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

import greeting from '../common/directives/greeting.directive.js';

export default angular.module('skeletonAngularJs.home', [uiRouter, greeting])
    .config(routing)
    .controller('HomeController', HomeController);
