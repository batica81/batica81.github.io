(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.message = "";
    $scope.color = "";

	$scope.updateLunch = function () {

		if ($scope.meals) {
            var numberOfCourses = $scope.meals.split(',').length;

            if (numberOfCourses <= 3) {
                $scope.message = "Enjoy!";
                $scope.color = "green";
            } else {
                $scope.message = "Too much!";
                $scope.color = "green";
            }

		} else {
            $scope.message = "Please enter data first";
            $scope.color = "red";
		}
    }

} // end controller

})();
