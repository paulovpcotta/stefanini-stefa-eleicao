/**
 * Create service 28/08/2018
 */
azure.service('saveFaceGroupService', ['$http', 
                                function($http){
	
	/**
	 * Register image face large person group
	 */
	this.postAddFaceGroup = function(uri, addFaceDto){
		return $http.post(uri + '/api-face-add-face-group/add-face-group', addFaceDto);
	};
	
	/**
	 * Método que treina o modelo do grupo
	 */
	this.getTrain = function(uri, nameGroup){
		return $http.get(uri + '/api-face-train-large-group/train?nameGroup=' + nameGroup);
	};
	
}]);