var app = angular.module('myApp', []);

app.directive('logo', function(){
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="logo">Logo <span ng-transclude></span>!</div>'
    };    
});

app.directive('formInput', function() {
    return {
        templateUrl: 'form-template.html',
        restrict: 'E'
    };
});