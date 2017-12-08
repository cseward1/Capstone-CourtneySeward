
angular.module("CapstoneApp")
.controller("RegisterCtrl", function($scope, $location, AuthFactory) {
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
    })
