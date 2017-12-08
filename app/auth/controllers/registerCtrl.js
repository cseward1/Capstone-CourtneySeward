
angular.module("CapstoneApp")
    .controller("RegisterCtrl", function ($scope, $location, AuthFactory, kidsFactory, $timeout) {
        // $scope.auth = {}

        // HIDE AND SHOW FOR THE REGISTRATION FORM:
        // hide and show for the first drop down form
        $scope.myvalue = false;
        $scope.showAlert = function () {
            $scope.myvalue = true;
        };

        // hide and show for the second drop down form
        $scope.my2ndvalue = false;
        $scope.showAlert = function () {
            $scope.my2ndvalue = true;
        };

        // Once the form is completed and saved the "click" event will route the user to the Home Page:
        $scope.registerInDatabase = function () {
            console.log("the registration form button is in fact working!")

            $location.url("/HomePageInformation/homePage")
            console.log("You are now registered and at the home page, welcome!")
        }


        // Collect the Kid's Information from the form and Factory and Post it to Firebase:
    
        $scope.newKid = {}

        $scope.saveChild = function (kid) {
            kidsFactory.add(kid)
            $location.url("/register")
            console.log("You have saved the Child's information into Firebase!")
        }

        // NEXT STEP: 
        // grab the information from your Registration form and call the "kid" information to POST to Firebase
        // only controller that I have access to the kids info 

        $timeout(() => {
            if (!kidsFactory.cache) {
                console.info("No cached data")
                kidsFactory.list(true).then(data => {
                    $scope.kids = data
                })
            } else {
                console.info("Using cached data")
                $scope.kids = kidsFactory.cache
            }
        }, 200)


        $scope.addKid = function () {
            const kid = {
                "firstName": $scope.newKid.firstName,
                "age": $scope.newKid.age,
                "Gender": $scope.newKid.Gender
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

        
                //  * If POST was successful, retrieve new list of kids
                .then(() => {
                    return kidsFactory.list()
                })

                // Bind new list of kids to scope so view gets updated
                .then(kids => {
                    $scope.kids = kids
                })
        }

    })



// Notes:

        //   Use the ng-click to check if there is any datain the factory cache each time the user loads a view
        //   that is bound to this controller


