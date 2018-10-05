/**
 * Create service 28/08/2018
 */
azure.service('detectFaceGroupLargeService', ['$http', 
                                function($http){
	
	/**
	 * Register image face large person group
	 */
	this.postAddFaceDetect = function(uri, addFaceDto){
		return $http.post(uri + '/api-face-add-face-group/add-face-detect', addFaceDto);
	};
	
	/**
	 * Register image face large person group
	 */
	this.postAddFaceIdentify = function(uri, identifyDto){
		return $http.post(uri + '/api-face-add-face-group/add-face-identify', identifyDto);
	};
	
}]);