/**
 * Create service 28/08/2018
 */
azure.service('similaryService', ['$http', 
                                function($http){
	
	/**
	 * Register image face large person group
	 */
	this.postAddGroup = function(uri, addFaceDto){
		return $http.post(uri + '/api-similary/add-face-group', addFaceDto);
	};
	
	/**
	 * Register image face large person group
	 */
	this.getSimilary = function(uri, faceID, group){
		return $http.get(uri + '/api-similary/similary?faceID=' + faceID + '&gruop=' + group);
	};
	
	/**
	 * Register image face large person group
	 */
	this.getTrain = function(uri){
		return $http.get(uri + '/api-similary/train');
	};
	
}]);