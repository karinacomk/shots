 (function () {
    'use strict';
	    angular
		.module('app.shot')
		.controller('ShotController', ShotController);

	 ShotController.$inject = ['$scope', '$state', 'Shot'];

	 function ShotController($scope, $state, Shot) {
	 	$scope.shots = [];
	 	$scope.viewDetalhe = false;
	 	$scope.alteraViewDetalhe = function() {
	 		$scope.viewDetalhe = false;
	 	}

	 	Shot.shots()
	    .then(function(retorno) {
	        $scope.shots = retorno;
	    })
	    .catch(function(erro) {
	        console.log(erro);
	    }); 

	    $scope.detalhes = function(id) {
			Shot.verDetalhes(id)
		    .then(function(retorno) {
		    	$scope.shot = retorno;
		    	$scope.viewDetalhe = true;
		    })
		    .catch(function(erro) {
		        console.log(erro);
		    }); 
	 	}	 	
	 }
})();