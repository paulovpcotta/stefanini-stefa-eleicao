/**
 * Controller para add face group
 */
azure.controller('similaryController', ['$scope', '$state', '$cookieStore', 'util', '$timeout', 'ngProgressFactory', 'Upload', '$http', 'similaryService', 'listFaceGroupLargeService',
	'detectService', 'saveFaceGroupService',
    function($scope, $state, $cookieStore, util, $timeout, ngProgressFactory, Upload, $http, similaryService, listFaceGroupLargeService,
    		detectService, saveFaceGroupService){

	$scope.addFaceDto = {};
	$scope.addFace = {};
	$scope.visibleMessage = false;
	$scope.detect = {};
	$scope.detect1 = {};
	$scope.imagemID = {};
	$scope.similary = {};
	
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
				$scope.visibleMessage = false;
				detectService.postDetect(util.getUri(), $scope.addFaceDto).success(function(data, status, headers, config) {
	 	 			console.log(data);
	 	 			$scope.detect = data[0];
	 	 		}).error(function(data, status, headers, config) {
	 	 			$scope.messages = data.message;
	 	 			$scope.visibleMessage = true;
	 	 			$scope.cssMessage = "message-table-incorret";
	 	 	    });
			};
		}
	};
	
	/**
	 * Method upload file
	 */
	$scope.up = function (input, typeImage) {
		$scope.messages = "Aguarde que estamos processando...";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-correct";
		var arquivo = document.getElementById('photo-up').files;
		for(var i=0; i < arquivo.length; i++){
			var reader = new FileReader();
			var type = arquivo[i].type;
			reader.readAsDataURL(arquivo[i]);
			reader.onload = function (e) {
				$scope.addFace.image64 = reader.result;
				$scope.addFace.body = reader.result.replace(/data:image\/jpeg;base64,/g, '');
				$scope.addFace.typeImage = type;
				$scope.visibleMessage = false;
				detectService.postDetect(util.getUri(), $scope.addFaceDto).success(function(data, status, headers, config) {
	 	 			console.log(data);
	 	 			$scope.detect1 = data[0];
	 	 			similaryService.postAddGroup(util.getUri(), $scope.addFaceDto).success(function(d, s, h, c) {
	 	 				console.log(d);
	 	 				$scope.imagemID = d;
	 	 				similaryService.getTrain(util.getUri()).success(function(da, st, he, co) {
	 	 		 			console.log(da);
	 	 		 		}).error(function(da, st, he, co) {
	 	 		 			$scope.messages = data.message;
	 	 		 			$scope.visibleMessage = true;
	 	 		 			$scope.cssMessage = "message-table-incorret";
	 	 		 	    });
	 	 			}).error(function(d, s, h, c) {
	 	 	 			$scope.messages = data.message;
	 	 	 			$scope.visibleMessage = true;
	 	 	 			$scope.cssMessage = "message-table-incorret";
	 	 	 	    });
	 	 		}).error(function(data, status, headers, config) {
	 	 			$scope.messages = data.message;
	 	 			$scope.visibleMessage = true;
	 	 			$scope.cssMessage = "message-table-incorret";
	 	 	    });
			};
		}
	};
	
	$scope.save = function(){
		$scope.messages = "Aguarde que estamos processando...";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-correct";
		similaryService.getSimilary(util.getUri(), $scope.detect.faceId, 'bb_group').success(function(data, status, headers, config) {
 			console.log(data);
 			$scope.similary = data[0];
 			$scope.visibleMessage = false;
 		}).error(function(data, status, headers, config) {
 			$scope.messages = data.message;
 			$scope.visibleMessage = true;
 			$scope.cssMessage = "message-table-incorret";
 	    });
	};
	
}]);