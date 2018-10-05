/**
 * Create service 28/08/2018
 */
azure.service('addFaceGroupService', ['$http', 
                                function($http){
	
	/**
	 * Register image face large person group
	 */
	this.postAddFaceGroup = function(uri, addFaceDto){
		return $http.post(uri + '/api-face-add-face-group/add-face-group', addFaceDto);
	};
	
	/**
	 * Método que registra o group large person
	 */
	this.getRegisterGroupLarge = function(uri, nameGroup, name, userData){
		return $http.get(uri + '/api-face-large-group/create-group?nameGroup=' + nameGroup + '&name=' + name + '&userData=' + userData);
	};
	
	/**
	 * Método que registra o group large person
	 */
	this.getRegisterPersonId = function(uri, nameGroup, name, userData){
		return $http.get(uri + '/api-face-large-group/create-person?nameGroup=' + nameGroup + '&name=' + name + '&userData=' + userData);
	};
	
}]);