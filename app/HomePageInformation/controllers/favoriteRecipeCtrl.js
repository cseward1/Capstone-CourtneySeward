angular.module("CapstoneApp")
    .controller("favoriteRecipeCtrl", function (favoriteRecipeFactory, healthFactory, AllergyFactory, kidsFactory, $scope, $location, $routeParams, $timeout) {


        //   Use the factory to get the favorite meal and kid id:
        favoriteRecipeFactory.kidRecipes($routeParams.kidid).then(recipes => {
            console.log(recipes)
            $timeout(() => {
                $scope.recipes = recipes
                console.log("$scope.recipes", $scope.recipes)
            })

        })
        $scope.showIngredients = function (id) {
            $scope.showStuff = !$scope.showStuff
            healthFactory.getRecipeIngredients(id).then((ingredients) => {
                console.log(ingredients)
                $scope.$apply(function () {
                    $scope.ingredients = ingredients
                })

                $scope.recipeName = ""
                $scope.ingredientLines = ""
                $scope.totalTime = ""
                $scope.numberOfServings = ""
            })
        }

        // toggle the 'showIngredients' Button to only display the ingredients of that selected meal:
        $scope.showIngredientz = true;
        $scope.showIngredients = function () {
            $scope.showIngredients(recipe.id) = $scope.showIngredientz === false ? true : false;
        };

        // get the button working to take me back to the home page:

        $scope.backtoHealthPage = function () {
            $location.url("/HomePageInformation/healthPage")
            console.log("You are now back at the health page!")
        }

        // get the delete button to work:
        $scope.deleteFavoriteMeal = () =>
            favoriteRecipeFactory.murder($routeParams.key).then(() =>
                $location.url("/"))

    })
