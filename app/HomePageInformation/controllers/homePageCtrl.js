// Home Page Controller:

angular.module("CapstoneApp")
    .controller("homePageCtrl", function ($scope, $location, AuthFactory, kidsFactory, $timeout) {
        console.log("in the home page controller")
        // $scope.homePage = {}
        let UserID = AuthFactory.getUser() 
        kidsFactory.list(UserID).then ((data) => {
            // timeout will re-initilize and re-bind your event listeners, kind of a "Wake Up" call:
            $timeout()
            $scope.kidz = data
            console.log("scope.kidz", $scope.kidz)            
        })


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