angular
    .module("CapstoneApp")
    .controller("KidCtrl", function (kidFactory, $scope) {
        $scope.kids = []
        let user = AuthFactory.getUser()
        /**
         * Use factory to get all employees from Firebase
         */
        kidsFactory.list(user.uid).then(data => {
            $scope.kids = data
        })


    })