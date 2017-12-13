// When the form is filled and saved the "click" event will route the user to the home page:
angular.module("CapstoneApp")
    .controller("healthCtrl", function (healthFactory, AllergyFactory, $scope, $location) {


        console.log("the health page is dispalying")

        // Meta Data from the Yummly App that I hard coded in - didn't understand how to do a "get" request for the meta data
         $scope.allergies = AllergyFactory
        // function:
        // 1. get the values of the search field and the drop down - ng-model call that variable
        $scope.searchRecipe = function (){
            healthFactory.getRecipes($scope.searchString).then(() => {
                $scope.recipeName = ""
                $scope.allergySearch= ""
            })
        }

           //  Use the factory to POST to Firebase:
      
    

// 2.string replace- go through the string and add a plus the api takes a 
 // 3.value of the allergy and the string with plus and send to the api
       

    })

