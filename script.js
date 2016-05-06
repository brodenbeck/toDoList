var app = angular.module('myModule', []);

app.controller('toDoController', function($scope) {
	$scope.toDo = [
		
	];

	$scope.addToDo = function() {
		$scope.toDo.push({ item: $scope.formToDo, done: false });
		$scope.formToDo = "";
	};

	$scope.total = function() {
		if($scope.toDo.length === 1) {
			return "is " + $scope.toDo.length + " item";
		} else {
			return "are " + $scope.toDo.length + " items";
		}
	}

	// in-progress
	$scope.clearCompleted = function() {
        
    };
});