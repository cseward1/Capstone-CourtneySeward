angular.module("CapstoneApp")
    .controller("favoriteRecipeCtrl", function (favoriteRecipeFactory, healthFactory, AllergyFactory, $scope, $location, $routeParams, $timeout) {
        // now pull it back down from firebase and unto the page


        //   Use the factory to get the favorite meal and kid id:

        favoriteRecipeFactory.kidRecipes($routeParams.kidid).then(recipes => {
            $timeout(() => {
                $scope.recipes = recipes
            })
            console.log("$scope.recipes", $scope.recipes)
        })
       
        
    })


    // click button on the home page that links you to the favorite recipes page
    // pass in the route paramter and the kid id