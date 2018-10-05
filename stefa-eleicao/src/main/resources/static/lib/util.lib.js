stefaEleicao.service('util', ['$http', 
                                function($http){
	
	var uri = 'http://' + window.location.host + '/stefa-eleicao';
	
	/**
	 * Method uri return
	 */
	this.getUri = function(){
		return uri;
	};
	
}]);