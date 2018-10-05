/**
 * Create service 28/08/2018
 */
stefaEleicao.service('adicionaCandidatoService', ['$http', 
                                function($http){
	
	this.postCadastraCandidato = function(uri, candidatoDTO){
		return $http.post(uri + '/candidato/criar-candidato', candidatoDTO);
	};
	
	this.getListaTodosCadidato = function(uri){
		return $http.get(uri + '/candidato/busca-todos-candidato');
	};
	
	this.getListaCandidatoIdentificador = function(uri, identificador){
		return $http.get(uri + '/candidato/busca-todos-candidato?identificador=' + identificador);
	};
	
}]);