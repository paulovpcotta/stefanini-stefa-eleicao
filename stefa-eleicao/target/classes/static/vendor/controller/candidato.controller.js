/**
 * Controller para add face group
 */
stefaEleicao.controller('adicionaCandidatoController', ['$scope', '$state', '$cookieStore', 'util', '$timeout', 'ngProgressFactory', 'Upload', '$http', 'adicionaCandidatoService',
    function($scope, $state, $cookieStore, util, $timeout, ngProgressFactory, Upload, $http, adicionaCandidatoService){

	$scope.visibleMessage = false;
	$scope.candidatoDTO = {};
	$scope.candidatos = {};
	
	adicionaCandidatoService.getListaTodosCadidato(util.getUri()).success(function(d, s, h, c) {
		$scope.candidatos = d;
	}).error(function(d, s, h, c) {
		$scope.messages = "Erro não foi possível trazer dados.";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-incorret";
    });
	
	$scope.cadastrar = function () {
		$scope.messages = "Aguarde que estamos processando...";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-correct";
		adicionaCandidatoService.postCadastraCandidato(util.getUri(), $scope.candidatoDTO).success(function(d, s, h, c) {
			$scope.messages = "Candidato " + $scope.candidatoDTO.nome + ' cadastrado com sucesso.';
			$scope.visibleMessage = true;
			$scope.cssMessage = "message-table-correct";
		}).error(function(d, s, h, c) {
 			$scope.messages = "Erro ao tentar cadastrar candidato.";
 			$scope.visibleMessage = true;
 			$scope.cssMessage = "message-table-incorret";
 	    });
	};
	
}]);