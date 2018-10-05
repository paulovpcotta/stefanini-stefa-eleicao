/**
 * Controller para list face group
 */
azure.controller('listFaceGroupLargeController', ['$scope', '$state', '$cookieStore', 'util', '$timeout', 'ngProgressFactory', 'Upload', '$http', 'listFaceGroupLargeService',
    function($scope, $state, $cookieStore, util, $timeout, ngProgressFactory, Upload, $http, listFaceGroupLargeService){

	$scope.listGroupsLarge = [];
	$scope.visibleMessage = false;
	
	//listFaceGroupLargeService.getListGroupsLarge(util.getUri()).success(function(data, status, headers, config) {
	listFaceGroupLargeService.getListGroupsLargeStatic(util.getUri()).success(function(data, status, headers, config) {
		$scope.listGroupsLarge = data;
	}).error(function(data, status, headers, config) {
		$scope.messages = data.message;
		$scope.visibleMessage = true;
		$scope.cssMessage = "message-table-incorret";
    });
	
	$scope.removeGroup = function(group){
		
	};
	
}]);