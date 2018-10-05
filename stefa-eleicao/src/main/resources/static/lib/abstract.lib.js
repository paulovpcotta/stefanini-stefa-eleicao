/**
	Abstract for construction commom in user case
*/
stefaEleicao.controller('abstractController', ['$scope', '$state', 
    function($scope, $state) {
      
	  $scope.initial = function(){
	    $state.go('/', {});
	  };
	  
}]).directive('menu', function() {
  return {
  	restrict: 'E',
    templateUrl: 'template/menu.html'
  };
});