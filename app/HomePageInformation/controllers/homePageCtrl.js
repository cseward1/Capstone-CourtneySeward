// Home Page Controller:

angular.module("CapstoneApp")
    .controller("homePageCtrl", function ($scope, $location, AuthFactory, kidsFactory,favoriteRecipeFactory, healthFactory, AllergyFactory, $timeout, $routeParams) {
        console.log("in the home page controller")
        // $scope.homePage = {}
        let user = AuthFactory.getUser()
        kidsFactory.list(user.uid).then((data) => {
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




        // New additions:
        // now attach the "" button so that you can view each indidual kids 'favorite meals' seperatley
        // $scope.kidsFavoriteMeal = function (recipe) {
        //     // (kidid)

        //     console.log("$scope.kid", $scope.kid)
        //     console.log("recipe", recipe)
        //     console.log("let me see this kid's favorite recipes")
        //     // save the actual recipe to firebase in this function with the kids name

        //     let kidrecipe = {
        //         kidid: $scope.kid,
        //         recipeName: recipe.recipeName,
        //         ingredientLines: recipe.ingredients.ingredientLines,
        //         ingredients: recipe.ingredients,
        //         totalTime : recipe.totalTime,
        //         // numberOfServings : recipe.numberOfServings
        //     }

        //     // Use the factory to POST to Firebase
        //     favoriteRecipeFactory.add(kidrecipe)
        //     // .then(() => {
        //     // $scope.kid.firstName = ""
        //     // $scope.ingredients.recipeName = ""
        //     // $scope.ingredients.ingredientLines = ""
        //     // $scope.ingredients.totalTime = ""
        //     // $scope.ingredients.numberOfServings = ""

        //     // })

        //     $location.url("/HomePageInformation/favoriteRecipes/" + $scope.kid)

        // }
        // Closing Brackets below

    })