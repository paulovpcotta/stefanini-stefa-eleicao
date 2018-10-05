azure.service('util', ['$http', 
                                function($http){
	
	var uri = 'http://' + window.location.host + '/big-face-azure';
	
	/**
	 * Method uri return
	 */
	this.getUri = function(){
		return uri;
	};
	
}]);