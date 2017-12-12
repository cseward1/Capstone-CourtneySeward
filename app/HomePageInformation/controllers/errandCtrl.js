// Errand Control Page that displays the Errand List unto the DOM and 

angular.module("CapstoneApp")
    .controller("errandCtrl", function ($scope, AuthFactory, ErrandFactory, $timeout, $location) {
        $scope.products = ["Milk", "Bread", "Cheese"];
        // this button or ng-click directive  will run the addItem function when the button is clicked
        // $scope.addItem = function () {
        //     // $scope.products.push($scope.addMe);
        //     $scope.errortext = "";
        //     if (!$scope.addMe) { return; }
        //     if ($scope.products.indexOf($scope.addMe) == -1) {
        //         $scope.products.push($scope.addMe);
        //     } else {
        //         $scope.errortext = "The item is already in your shopping list.";
        //     }
        // }

        // We also want to be able to remove items from the shopping list.
        // made a function named removeItem, which takes the index of the item you want to remove, as a parameter.
        $scope.removeItem = function (x) {
            // checking value and throwing error if already inputted
            $scope.errortext = "";
            $scope.products.splice(x, 1);
        }


        // NEXT STEP: 
        // grab the information from your Grocery List and POST to Firebase attached to that parent Id
        
        // $scope.$on('$viewContentLoaded',function() {
        //     if (!ErrandFactory.cache) {
        //         console.info("No cached data")
        //         ErrandFactory.list(AuthFactory.getUser().uid).then(data => {
        //             $scope.errandList = data
        //         })
        //     } else {
        //         console.info("Using cached data")
        //         $scope.apply($scope.errandList = ErrandFactory.cache)
        //     }
        // })

        // $scope.saveChild = function () {
        $scope.saveListItem = function () {
            console.log("user!", firebase.auth().currentUser.id)
            const errand = {
                "listItem": $scope.itemName,
                "ParentID": AuthFactory.getUser().uid
            }
            // const errand = {
            //     "storeName": $scope.errand.storeName,
            //     "listItems": $scope.errand.listItems,
            //     "Date": $scope.kid.Date.Now(),
            //     "ParentID": AuthFactory.getUser()
            //     // "employmentEnd": 0
            // }

            //  Use the factory to POST to Firebase

            ErrandFactory.add(errand).then(() => {
                $scope.itemName = ""
                
            })

            // ErrandFactory.add(errand).then(() => {
            //     $scope.errand.storeName = ""
            //     $scope.errand.listItems = ""
            //     $scope.$scope.kid.Date.now() = ""
            // })


                // If POST was successful, retrieve new list of kids
                .then(() => {
                    return ErrandFactory.list(AuthFactory.getUser().uid)
                })

                // Bind new list of kids to scope so view gets updated
                .then(errandList => {
                    $timeout()
                    $scope.errandList = errandList
                    console.log("ErrandsList",$scope.errandList)
                })
        }

    })