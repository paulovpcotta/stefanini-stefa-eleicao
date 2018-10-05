/**
 * Controller para add face group
 */
azure.controller('saveFaceGroupController', ['$scope', '$state', '$cookieStore', 'util', '$timeout', 'ngProgressFactory', 'Upload', '$http', 'saveFaceGroupService', 'listFaceGroupLargeService',
    function($scope, $state, $cookieStore, util, $timeout, ngProgressFactory, Upload, $http, saveFaceGroupService, listFaceGroupLargeService){

	$scope.addFaceDto = {};
	$scope.listGroupsLarge = [];
	$scope.groupID = '';
	$scope.nameGroup = '';
	$scope.dados = [];
	$scope.visibleMessage = false;
	
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
	
	$scope.train = function(){
		$scope.messages = "Aguarde que estamos processando...";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-correct";
		saveFaceGroupService.getTrain(util.getUri(), $scope.nameGroup).success(function(data, status, headers, config) {
			$scope.messages = "Fase de treinamento concluído.";
			$scope.visibleMessage = true;
			$scope.cssMessage = "message-table-correct";
			console.log(data);
		}).error(function(data, status, headers, config) {
			$scope.messages = data.message;
			$scope.visibleMessage = true;
			$scope.cssMessage = "message-table-incorret";
	    });
	}
	
	/**
	 * Method upload file
	 */
	$scope.uploadFile = function (input, typeImage) {
		$scope.dados = document.getElementById('photo-upload').files;
		console.log($scope.dados);
	};
	
	$scope.save = function(){
		$scope.messages = "Aguarde que estamos processando...";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-correct";
		var arquivo = $scope.dados;
		var count = 0;
		var tempCount = arquivo.length;
		for(var i=0; i < arquivo.length; i++){
			var reader = new FileReader();
			var type = arquivo[i].type;
			reader.readAsDataURL(arquivo[i]);
			reader.onload = function (e) {
				$scope.addFaceDto.image64 = reader.result;
				$scope.addFaceDto.body = reader.result.replace(/data:image\/jpeg;base64,/g, '');
				$scope.addFaceDto.key = $scope.groupID;
				$scope.addFaceDto.nameGroup = $scope.nameGroup;
				$scope.addFaceDto.typeImage = type;
				saveFaceGroupService.postAddFaceGroup(util.getUri(), $scope.addFaceDto).success(function(data, status, headers, config) {
		 			console.log(data);
		 			++count;
		 			if(count == tempCount){
			 			$scope.messages = "Upload realizado com sucesso. A quantidade de imagens " + tempCount + " foi carregado no Azure Group: " + $scope.nameGroup + ".";
			 			$scope.visibleMessage = true;
			 			$scope.cssMessage = "message-table-correct";
					}
		 		}).error(function(data, status, headers, config) {
		 			$scope.messages = data.message;
		 			$scope.visibleMessage = true;
		 			$scope.cssMessage = "message-table-incorret";
		 	    });
			};
		}
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