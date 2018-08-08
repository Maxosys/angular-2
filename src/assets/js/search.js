var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $filter) {
$scope.searchString=[{Text:'http://www.maxosys.com'}];
$scope.searchString2=$scope.searchString;
$scope.$watch('search', function(val)
    { 
        $scope.searchString= $filter('filter')($scope.searchString2, val);
    });
});
