// Home Page Controller:

angular.module("CapstoneApp")
    .controller("homePageCtrl", function ($scope, $location, AuthFactory, kidsFactory, $timeout) {
        console.log("in the home page controller")
        // $scope.homePage = {}
        let user = AuthFactory.getUser() 
        kidsFactory.list(user.uid).then ((data) => {
            // timeout will re-initilize and re-bind your event listeners, kind of a "Wake Up" call:
            $timeout()
            $scope.kidz = data
            console.log("scope.kidz", $scope.kidz)            
        })


        // Accesing other Partials from the Home Page:
        // Go from Home Page to Health Page:
        $scope.healthButton = function () {
            $location.url("/HomePageInformation/healthPage")
            console.log("You are now registered and at the health page!")
        }

        // Go from the Home Page to the Errand Page:
        $scope.errandsButton = function () {
            $location.url("/HomePageInformation/errands")
            console.log("You are now at the errands page!")
        }

        // Go from the Home Page to the NannyLog Page:
        $scope.nannyLogButton = function () {
            $location.url("/HomePageInformation/favoriteRecipes")
            console.log("You are now registered and at the nannylog page!")
        }

        // Closing Brackets below
    })