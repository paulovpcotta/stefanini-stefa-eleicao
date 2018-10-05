/**
 * Controller para add face group
 */
azure.controller('detectFaceGroupLargeController', ['$scope', '$state', '$cookieStore', 'util', '$timeout', 'ngProgressFactory', 'Upload', '$http', 'detectFaceGroupLargeService', 'listFaceGroupLargeService',
    function($scope, $state, $cookieStore, util, $timeout, ngProgressFactory, Upload, $http, detectFaceGroupLargeService, listFaceGroupLargeService){

	$scope.addFaceDto = {};
	$scope.listGroupsLarge = [];
	$scope.groupID = '';
	$scope.nameGroup = '';
	$scope.dados = [];
	$scope.visibleMessage = false;
	$scope.imagem = '';
	$scope.identifyDto = {};
	
	/**
	 * A lista não comentada irá morrer quando o HBase vier
	 */
	//listFaceGroupLargeService.getListGroupsLarge(util.getUri()).success(function(data, status, headers, config) {
	listFaceGroupLargeService.getListGroupsLargeStatic(util.getUri()).success(function(data, status, headers, config) {
		$scope.listGroupsLarge = data;
	}).error(function(data, status, headers, config) {
		$scope.messages = data.message;
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-incorret";
    });
	
	$scope.verify = function(){
		detectFaceGroupLargeService.postAddFaceDetect(util.getUri(), $scope.addFaceDto).success(function(d, s, h, c) {
 			console.log(d);
 			console.log(d[0].faceID);
 			$scope.identifyDto.faceId = d[0].faceID;
 			$scope.identifyDto.nameGroup = $scope.nameGroup;
 			$scope.identifyDto.maxNumOfCandidatesReturned = 1;
 			$scope.identifyDto.confidenceThreshold = '0.6';
 			detectFaceGroupLargeService.postAddFaceIdentify(util.getUri(), $scope.identifyDto).success(function(data, status, headers, config) {
 	 			console.log(data);
 	 			if(data[0].candidates.length <= 0){
 	 				$scope.messages = "Não é fraudador.";
 	 	 			$scope.visibleMessage = true;
 	 	 			$scope.cssMessage = "message-table-correct";
 	 			}else{
 	 				$scope.messages = 'É fraudador.';
 	 	 			$scope.visibleMessage = true;
 	 	 			$scope.cssMessage = "message-table-incorret";
 	 			}
 	 		}).error(function(data, status, headers, config) {
 	 			$scope.messages = data.message;
 	 			$scope.visibleMessage = true;
 	 			$scope.cssMessage = "message-table-incorret";
 	 	    });
 		}).error(function(d, s, h, c) {
 			$scope.messages = d.message;
 			$scope.visibleMessage = true;
 			$scope.cssMessage = "message-table-incorret";
 	    });
	};
	
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
				$scope.imagem = reader.result;
				$scope.addFaceDto.body = reader.result.replace(/data:image\/jpeg;base64,/g, '');
				$scope.addFaceDto.key = $scope.groupID;
				$scope.addFaceDto.nameGroup = $scope.nameGroup;
				$scope.addFaceDto.typeImage = type;
			};
		}
	};
	
	$scope.save = function(){
		
	};
	
	/**
	 * Método que recupera o grupo
	 */
	$scope.getGroup = function(obj){
		var indiceID = obj.indexOf(':')+2;
		var indiceParadaID = obj.indexOf(',')-1;
		var indiceName = obj.indexOf('facePersonGroupID')+20;
		var indiceNameParada = obj.indexOf('faceDtos')-3;
		
		$scope.groupID = obj.substring(indiceName, indiceNameParada);;
		$scope.nameGroup = obj.substring(indiceID, indiceParadaID);
	};
	
}]);