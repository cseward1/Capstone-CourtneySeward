angular.module("CapstoneApp")
.controller("AuthCtrl", function($scope, $location, AuthFactory) {
    $scope.auth = {}

    $scope.logoutUser = function () {
        AuthFactory.logout()
        $location.url('/auth')
    }

    $scope.logMeIn = function () {
        AuthFactory.authenticate($scope.auth).then(function (didLogin) {
            $scope.login = {}
            $location.url("/employees/list")
        })
    }

    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser).then(function (didRegister) {
        $scope.logMeIn(registerNewUser)
      })
    }
    
})

// line 13 - "employee list" -  what would that translate into for me?
