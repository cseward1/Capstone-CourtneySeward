angular
.module("CapstoneApp")
.controller("kidDetailCtrl",
    function ($scope, $location, $routeParams, kidsFactory) {
        $scope.kid = {}

        /**
         * Use the factory to get the details of a single employee
         */
        kidFactory.single($routeParams.kidId).then(kid => {
            $scope.kid = ""
        })
    }
)

