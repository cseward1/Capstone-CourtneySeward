angular.module("CapstoneApp")
    .controller("errandCtrl", function ($scope) {
        $scope.products = ["Milk", "Bread", "Cheese"];
        // this button or ng-click directive  will run the addItem function when the button is clicked
        $scope.addItem = function () {
            // $scope.products.push($scope.addMe);
            $scope.errortext = "";
            if (!$scope.addMe) {return;}
            if ($scope.products.indexOf($scope.addMe) == -1) {
                $scope.products.push($scope.addMe);
            } else {
                $scope.errortext = "The item is already in your shopping list.";
            }
        }

        // We also want to be able to remove items from the shopping list.
        // made a function named removeItem, which takes the index of the item you want to remove, as a parameter.
        $scope.removeItem = function (x) {
            // checking value and throwing error if already inputted
            $scope.errortext = "";
            $scope.products.splice(x, 1);
        }

    });