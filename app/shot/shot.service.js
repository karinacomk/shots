angular
    .module('app.service.shot')
    .factory('Shot', shotService);

    shotService.$inject = ['$resource', '$rootScope'];   
    function shotService($resource) {
        
        const url = "https://api.dribbble.com/v1/shots/:id/?sort=views&access_token=c21659a8660c7caa1d48998e27f1bb759d545efd6218a86d31af88530930e06e";
        const paramDefaults = {}
        const actions = {
            shots: { method: 'GET', isArray: true },
            verDetalhes: { method: 'GET' }
        };

        const resource = $resource(url, paramDefaults, actions);

        return {
            shots,
            verDetalhes
        };

        function shots() {
            return resource.shots().$promise;
        }

        function verDetalhes(id) {
            return resource.verDetalhes({ 'id': id }).$promise;
        }
    }