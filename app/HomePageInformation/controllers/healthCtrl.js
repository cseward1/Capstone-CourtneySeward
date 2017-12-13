// When the form is filled and saved the "click" event will route the user to the home page:
angular.module("CapstoneApp")
    .controller("healthCtrl", function (healthFactory, AllergyFactory, $scope, $location) {


        console.log("the health page is dispalying")

        // Meta Data from the Yummly App that I hard coded in - didn't understand how to do a "get" request for the meta data
        const allergies = AllergyFactory.allergies




    })

