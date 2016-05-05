angular
    .module('app.shot')		
    .config(function($stateProvider, $locationProvider) {
    
    $stateProvider
        .state('shots', {
            url: '/shots',
            templateUrl: 'shot/templates/shots.html',
            controller: 'ShotController'
        })     
});