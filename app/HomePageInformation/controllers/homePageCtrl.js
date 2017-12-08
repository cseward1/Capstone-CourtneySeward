// Home Page Controller:

angular.module("CapstoneApp")
    .controller("homePageCtrl", function ($scope, $location) {
        // $scope.homePage = {}



        // Accesing other Partials from the Home Page:
        // Go from Home Page to Health Page:
        $scope.healthButton = function () {
            $location.url("/healthPage")
            console.log("You are now registered and at the home page, welcome!")
        }

        // Go from the Home Page to the Errand Page:
        $scope.errandsButton = function () {
            $location.url("/errandsPage")
            console.log("You are now registered and at the home page, welcome!")
        }

        // Go from the Home Page to the NannyLog Page:
        $scope.nannyLogButton = function () {
            $location.url("/nannyLogButton")
            console.log("You are now registered and at the home page, welcome!")
        }

        // Closing Brackets below
    })