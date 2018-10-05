/**
	Abstract for construction commom in user case
*/
azure.controller('abstractController', ['$scope', '$state', 
    function($scope, $state) {
      
	  $scope.initial = function(){
	    $state.go('/', {});
	  };
	  
	  $scope.listGroup = function(){
	    $state.go('group', {});
	  };
	  
	  $scope.save = function(){
	    $state.go('save', {});
	  };
	  
	  $scope.detect = function(){
	    $state.go('detect', {});
	  };
	  
	  $scope.detectFace = function(){
	    $state.go('detect-face', {});
	  };
	  
	  $scope.similary = function(){
	    $state.go('similary', {});
	  };
	  
}]).directive('menu', function() {
  return {
  	restrict: 'E',
    templateUrl: 'template/menu.html'
  };
});