// Control Page that displays the Errand List on to the DOM: 
angular.module("CapstoneApp")
    .controller("errandCtrl", function ($scope, $routeParams, AuthFactory, ErrandFactory, $timeout, $location) {
        $scope.products = ["Milk", "Bread", "Cheese"];


        // Delete an item from the Errand List:
        $scope.deleteListItem = function (errand) {
            console.log("the delete list item Button is firing!")
            var errandIndex = $scope.errandList.indexOf(errand);
            if (errandIndex >= 0) {
                $scope.errandList.splice(errandIndex, 1)
            }
        }

        // call the date: 
        $scope.today = new Date();


        // keep the list updated and displaying:
        ErrandFactory.list(AuthFactory.getUser().uid)
            .then(errandList => {
                $timeout()
                $scope.errandList = errandList
                console.log("ErrandsList", $scope.errandList)
            })


        $scope.saveListItem = function () {
            // console.log("user!", firebase.auth().currentUser.id):
            const errand = {
                // "Date": $scope.Date.now(),
                "storeName": $scope.storeName,
                "listItem": $scope.itemName,
                "ParentID": AuthFactory.getUser().uid
            }

            //  Use the factory to POST to Firebase:
            ErrandFactory.add(errand).then(() => {
                // $scope.Date.now() = ""
                // $scope.storeName = ""
                $scope.itemName = ""
            })


                // If POST was successful, retrieve new list of kids:
                .then(() => {
                    return ErrandFactory.list(AuthFactory.getUser().uid)
                })

                // Bind new list of kids to scope so view gets updated
                .then(errandList => {
                    $timeout()
                    $scope.errandList = errandList
                    console.log("ErrandsList", $scope.errandList)

                })
        }

        // This function is bound to an ng-click directive on the button in the view:
        $scope.deleteListItem = () =>
            ErrandFactory.delete($scope.errand, $routeParams.errandId).then(() =>
                $location.url("/"))
    })
