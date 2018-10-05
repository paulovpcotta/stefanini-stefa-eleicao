/**
 * Create service 28/08/2018
 */
azure.service('detectService', ['$http', 
                                function($http){
	
	/**
	 * Register image face large person group
	 */
	this.postDetect = function(uri, addFaceDto){
		return $http.post(uri + '/api-face-detect/add-face-detect', addFaceDto);
	};
	
}]);