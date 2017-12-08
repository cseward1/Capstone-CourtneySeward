angular
.module("CapstoneApp")
.controller("kidsListCtrl", function (kidsFactory, $scope) {
    $scope.kids = []

    /**
     * Use factory to get all employees from Firebase
     */
    kidsFactory.list().then(data => {
        $scope.kids = data
    })
})