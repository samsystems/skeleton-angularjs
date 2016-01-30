function greeting() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: '<h1>Welcome to Skeleton AngularJs, {{name}}</div>'
    };
}

export default angular.module('directives.greeting', [])
    .directive('greeting', greeting)
    .name;
