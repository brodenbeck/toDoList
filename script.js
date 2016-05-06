var app = angular.module('myModule', []);

app.controller('toDoController', function ($scope) {
	$scope.toDo = [
		{ item: "Read ng-book", done: false },
		{ item: "Make to-do list app", done: false },
		{ item: "Go grocery shopping", done: false }
	];
});