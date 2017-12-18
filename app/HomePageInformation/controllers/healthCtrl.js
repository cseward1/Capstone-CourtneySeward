
// When the form is filled and saved the "click" event will route the user to the home page:
angular.module("CapstoneApp")
    .controller("healthCtrl", function (healthFactory, AllergyFactory, favoriteRecipeFactory, kidsFactory, AuthFactory, $scope, $location, $timeout) {
        console.log("the health page is dispalying")
        $scope.showStuff = false

        // Grab acces to the kids names:
        let user = AuthFactory.getUser()
        kidsFactory.list(user.uid).then((data) => {
            // timeout will re-initilize and re-bind your event listeners, kind of a "Wake Up" call:
            $timeout()
            $scope.kidz = data
            console.log("scope.kidz", $scope.kidz)
        })

        // Information I am grabbing from the Yummly app:
        // Meta Data from the Yummly App that I hard coded in - didn't understand how to do a "get" request for the meta data
        $scope.allergies = AllergyFactory
        // function:
        // 1. Get the values of the search field, the image, and ingredients with it filtering the allergy selected
        $scope.searchRecipe = function (allergy) {
            console.log(allergy)
            healthFactory.getRecipes($scope.searchString, allergy.allergyCode).then((Recipes) => {
                console.log(Recipes)
                $scope.$apply(function () {
                    $scope.Recipes = Recipes
                })

                $scope.recipeName = ""
                $scope.allergySearch = ""
            })
        }

        // Button call to See the Ingredients:
        $scope.seeIngredients = function (id) {
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


        // Trying to Post into Firebase:
        // Button call to fire "saveFavoriteRecipe"
        $scope.saveFavoriteRecipe = function ( recipe) {

            console.log("$scope.kid", $scope.kid)
            console.log("recipe", recipe)
            console.log("save this recipe to my favorites!")
            // save the actual recipe to firebase in this function with the kids name

            let kidrecipe = {   
                kidid : $scope.kid,
                recipeName : recipe.recipeName,
                ingredientLines : recipe.ingredients.ingredientLines,
                ingredients: recipe.ingredients,
                totalTime : recipe.totalTime,
                // numberOfServings : recipe.numberOfServings
            }   

            // Use the factory to POST to Firebase
            favoriteRecipeFactory.add(kidrecipe)
            // .then(() => {
                // $scope.kid.firstName = ""
                // $scope.ingredients.recipeName = ""
                // $scope.ingredients.ingredientLines = ""
                // $scope.ingredients.totalTime = ""
                // $scope.ingredients.numberOfServings = ""

            // })
            
            $location.url("/HomePageInformation/favoriteRecipes/" + $scope.kid)

        }


    })


// // When the form is filled and saved the "click" event will route the user to the home page:
// angular.module("CapstoneApp")
// .controller("healthCtrl", function (healthFactory, AllergyFactory, $scope, $location) {


//     console.log("the health page is dispalying")

//     // Meta Data from the Yummly App that I hard coded in - didn't understand how to do a "get" request for the meta data
//     $scope.allergies = AllergyFactory
//     // function:
//     // 1. Get the values of the search field, the image, and ingredients with it filtering the allergy selected
//     $scope.searchRecipe = function (allergy) {
//         console.log(allergy)
//         healthFactory.getRecipes($scope.searchString, allergy.allergyCode).then((Recipes) => {
//             console.log(Recipes)
//             $scope.$apply(function () {
//                 $scope.Recipes = Recipes
//             })

//             $scope.recipeName = ""
//             $scope.allergySearch = ""
//         })
//     }

//     // Button call to See the Ingredients:
//     $scope.seeIngredients = function (id) {
//         healthFactory.getRecipeIngredients(id).then((ingredients) => {
//             console.log(ingredients)
//             $scope.$apply(function () {
//                 $scope.ingredients = ingredients
//             })

//             $scope.recipeName = ""
//             $scope.ingredientLines = ""
//             $scope.prepTime = ""
//             $scope.numberOfServings = ""
//         })
//     }

//     // Button call to fire "saveFavoriteRecipe"
//     $scope.saveFavoriteRecipe = function (recipeName) {
//         $location.url("/HomePageInformation/favoriteRecipes")
//         console.log("save this recipe to my favorites!")

//     }

//     // 2. String replace- go through the string and add a plus the api takes a 
//     // 3.value of the allergy and the string with plus and send to the api


// })



