/**
 * Create service 28/08/2018
 */
azure.service('listFaceGroupLargeService', ['$http', 
                                function($http){
	
	/**
	 * Método que carrega a lista
	 */
	this.getListGroupsLarge = function(uri){
		return $http.get(uri + '/api-face-large-group/list-group');
	};
	
	/**
	 * Método que carrega a lista estatica será removido
	 */
	this.getListGroupsLargeStatic = function(uri){
		return $http.get(uri + '/api-face-large-group/list-group-static');
	};
	
}]);