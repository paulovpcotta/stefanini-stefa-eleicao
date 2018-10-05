/**
 * Controller para add face group
 */
azure.controller('detectController', ['$scope', '$state', '$cookieStore', 'util', '$timeout', 'ngProgressFactory', 'Upload', '$http', 'detectService', 'listFaceGroupLargeService',
    function($scope, $state, $cookieStore, util, $timeout, ngProgressFactory, Upload, $http, detectService, listFaceGroupLargeService){

	$scope.addFaceDto = {};
	$scope.groupID = '';
	$scope.nameGroup = '';
	$scope.visibleMessage = false;
	$scope.detect = {};
	
	/**
	 * Method upload file
	 */
	$scope.uploadFile = function (input, typeImage) {
		$scope.messages = "Aguarde que estamos processando...";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-correct";
		var arquivo = document.getElementById('photo-upload').files;
		for(var i=0; i < arquivo.length; i++){
			var reader = new FileReader();
			var type = arquivo[i].type;
			reader.readAsDataURL(arquivo[i]);
			reader.onload = function (e) {
				$scope.addFaceDto.image64 = reader.result;
				$scope.addFaceDto.body = reader.result.replace(/data:image\/jpeg;base64,/g, '');
				$scope.addFaceDto.typeImage = type;
				detectService.postDetect(util.getUri(), $scope.addFaceDto).success(function(data, status, headers, config) {
	 	 			console.log(data);
	 	 			$scope.detect = data[0];
	 	 			$scope.visibleMessage = false;
	 	 		}).error(function(data, status, headers, config) {
	 	 			$scope.messages = data.message;
	 	 			$scope.visibleMessage = true;
	 	 			$scope.cssMessage = "message-table-incorret";
	 	 	    });
			};
		}
	};
	
}]);