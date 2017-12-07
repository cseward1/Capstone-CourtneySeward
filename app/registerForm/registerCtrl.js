// Controller Page for the Registration Form
// require the Angular App
var app = angular.module('CapstoneApp', []);


app.controller('registerCtrl', function($scope) {
    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});