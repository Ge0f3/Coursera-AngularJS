(function(){
	'use strict';
	// name= 'Geoffrey'

	angular.module('Myapp',[])

	.controller('mycontroller',function($scope){
		$scope.title='First Angular app '
		$scope.name= "Geoffrey"
		$scope.greet =function(){
			return "Hello "+$scope.name;
		}

	});

})();