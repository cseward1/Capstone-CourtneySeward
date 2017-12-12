angular
.module("CapstoneApp")
.controller("kidsListCtrl", function (kidsFactory, $scope) {
    $scope.kids = []
    let user = AuthFactory.getUser()
    /**
     * Use factory to get all employees from Firebase
     */
    kidsFactory.list(user.uid).then(data => {
        $scope.kids = data
    })
})