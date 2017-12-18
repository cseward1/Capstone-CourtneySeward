angular.module("CapstoneApp")
    .controller("favoriteRecipeCtrl", function (favoriteRecipeFactory, healthFactory, AllergyFactory, $scope, $location, $routeParams, $timeout) {
        //   Use the factory to get the favorite meal and kid id:

        favoriteRecipeFactory.kidRecipes($routeParams.kidid).then(recipes => {
            console.log(recipes)
            $timeout(() => {
                $scope.recipes = recipes
                console.log("$scope.recipes", $scope.recipes)
            })
           
        })
        $scope.seeIngredients = function (id) {
            $scope.showStuff = !$scope.showStuff
            healthFactory.getRecipeIngredients(id).then((ingredients) => {
                console.log(ingredients)
                $scope.$apply(function () {
                    $scope.ingredients = ingredients
                })
            })
        }


    })
