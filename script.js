var app = angular.module('myModule', []);

app.controller('toDoController', function($scope) {
	$scope.toDo = [
		{ item: "Read ng-book", done: false },
		{ item: "Make to-do list application", done: false },
		{ item: "Go grocery shopping", done: false }
	];

	$scope.addToDo = function() {
		$scope.toDo.push({ item: $scope.formToDo, done: false });
		$scope.formToDo = "";
	};

	$scope.total = function() {
		return $scope.toDo.length;
	}

	// in-progress
	$scope.clearCompleted = function() {
        $scope.toDo.done = toDo.filter($scope.toDo, function(task){
            return !toDo.done;
        });
    };
});