
(function(){
	'use strict';
	// name= 'Geoffrey'

	angular.module('namecalc',[])

	.controller('calculator',function($scope){
		$scope.name = " ";
		$scope.value = 0;
		$scope.displaynumeric = function(){
			var value = 
			calculateNumeric($scope.name);
			$scope.value =value;

		};
		function calculateNumeric(string){
			var stringvalue = 0;
			for(var i=0;i<string.length;i++){
				stringvalue += string.charCodeAt(i);
			}

			return stringvalue;

		}

	});

})();