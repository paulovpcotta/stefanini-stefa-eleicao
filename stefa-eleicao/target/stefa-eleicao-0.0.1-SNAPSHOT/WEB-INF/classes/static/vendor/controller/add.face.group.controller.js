/**
 * Controller para add face group
 */
azure.controller('addFaceGroupController', ['$scope', '$state', '$cookieStore', 'util', '$timeout', 'ngProgressFactory', 'Upload', '$http', 'addFaceGroupService',
    function($scope, $state, $cookieStore, util, $timeout, ngProgressFactory, Upload, $http, addFaceGroupService){

	$scope.visibleMessage = false;
	
	$scope.cadastrar = function () {
		$scope.messages = "Aguarde que estamos processando...";
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-correct";
		addFaceGroupService.getRegisterGroupLarge(util.getUri(), $scope.nameGroup, $scope.name, $scope.userData).success(function(data, status, headers, config) {
			addFaceGroupService.getRegisterPersonId(util.getUri(), $scope.nameGroup, $scope.name, $scope.userData).success(function(d, s, h, c) {
				$scope.messages = "Foi criado o grupo " + $scope.nameGroup + ' com sucesso. E seu personId: ' + d.personId;
				$scope.visibleMessage = true;
				$scope.cssMessage = "message-table-correct";
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
	
}]);