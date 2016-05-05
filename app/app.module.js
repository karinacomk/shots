angular
    .module('app.service.shot', []);

angular
    .module('app', [
        'ui.router', 
        'ngResource', 
        'app.shot', 
        'app.service.shot'
  ]);