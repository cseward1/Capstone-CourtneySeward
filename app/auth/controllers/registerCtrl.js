
angular.module("CapstoneApp")
.controller("RegisterCtrl", function($scope, $location, AuthFactory, kidsFactory) {
    // $scope.auth = {}

    // HIDE AND SHOW FOR THE FORM:
    // hide and show for second child form
          $scope.myvalue = false;
          $scope.showAlert = function(){
            $scope.myvalue = true;  
          };

    // hide and show for third child form
              $scope.my2ndvalue = false;
              $scope.showAlert = function(){
                $scope.my2ndvalue = true;  
              };

     // When the form is filled and saved the "click" event will route the user to the home page:
        $scope.registerInDatabase = function(){   
            console.log("the registration form button is in fact working!")
            
            $location.url("/HomePageInformation/homePage")
            console.log("You are now registered and at the home page, welcome!")
        }
   
// Create a ng-click event that listens for when the Save Button on the Reguister Form is clicked:
// Put where do I place it? 
$scope. = function (saveChild(kid) {
    console.log("You have saved the Child's information into Firebase!")
}




// And then send that information to Firebase:
    // NEXT STEP: 
    // grab the information from your Registration form and call kid information on the page 
    // only controller that I have access to the kids info 
    // Now let's Post to Firebase the Kid's information:

        $scope.newKid = {}
    
        /**
         * Use this event listener to check if there is any data
         * in the factory cache each time the user loads a view
         * that is bound to this controller
         */

        //  should line 48 be kid or kids tried kids the first time

        $scope.$on('$viewContentLoaded', function(event) {
            if (!kidsFactory.cache) {
                console.info("No cached data")
                kidsFactory.list(true).then(data => {
                    $scope.kids = data
                })
            } else {
                console.info("Using cached data")
                $scope.kids = kidsFactory.cache
            }
        })
    
        $scope.addKid = function () {
            const kid = {
                "firstName": $scope.newKid.firstName,
                "age": $scope.newKid.age,
                "Gender":  $scope.newKid.Gender
                // "employmentEnd": 0
            }
    
            /**
             * Use the factory to POST to Firebase
             */
            kidsFactory.add(kid).then(() => {
                $scope.kid.firstName = ""
                $scope.kid.age = ""
                $scope.kid.Gender = ""
            })
    
            /**
             * If POST was successful, retrieve new list of kids
             */
            .then(() => {
                return kidsFactory.list()
            })
    
            /**
             * Bind new list of kids to scope so view gets updated
             */
            .then(kids => {
                $scope.kids = kids
            })
        }
    })

    // call the function unto this controller
