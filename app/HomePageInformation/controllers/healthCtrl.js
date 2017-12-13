
// When the form is filled and saved the "click" event will route the user to the home page:
angular.module("CapstoneApp")
    .controller("healthCtrl", function (healthFactory, AllergyFactory, $scope, $location) {


        console.log("the health page is dispalying")

        // Meta Data from the Yummly App that I hard coded in - didn't understand how to do a "get" request for the meta data
        $scope.allergies = AllergyFactory
        // function:
        // 1. Get the values of the search field:
        $scope.searchRecipe = function (allergy) {
            console.log(allergy)
            healthFactory.getRecipes($scope.searchString,allergy.allergyCode).then((Recipes) => {
                console.log(Recipes)
                $scope.$apply(function(){
                    $scope.Recipes = Recipes 
                })
                
                $scope.recipeName = ""
                $scope.allergySearch = ""
            })
        }

        // 2. String replace- go through the string and add a plus the api takes a 
        // 3.value of the allergy and the string with plus and send to the api


    })

