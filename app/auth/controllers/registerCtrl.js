
angular.module("CapstoneApp")
.controller("RegisterCtrl", function($scope, $location, AuthFactory) {
    // $scope.auth = {}

 
          $scope.myvalue = false;
          $scope.showAlert = function(){
            $scope.myvalue = true;  
          };
        })