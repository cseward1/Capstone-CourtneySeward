//  Controller Page for Registration & Log In:

angular.module("CapstoneApp")
    .controller("AuthCtrl", function ($scope, $location, AuthFactory) {
        $scope.auth = {}

        // function to log out:
        $scope.logoutUser = function () {
            AuthFactory.logout()
            // $location.url('')
            $location.url('/auth')
            console.log("You are now logged out, Goodbye!")
        }
        // function to log in:
        $scope.logMeIn = function () {
            AuthFactory.authenticate($scope.auth).then(function (didLogin) {
                $scope.login = {}
                $location.url("/HomePageInformation/homePage")
                console.log("You are now logged in, Welcome!")
            })
        }
        // function to register:
        $scope.registerUser = function (registerNewUser) {
            AuthFactory.registerWithEmail(registerNewUser).then(function (didRegister) {
                // $scope.logMeIn(registerNewUser)
                $location.url("/register")
                console.log("You are now registered in, Welcome!")
            })
        }

    })