angular.module("CapstoneApp").controller("NavCtrl",
function ($scope, $location, AuthFactory, $rootScope) {
    // took out Employee Factory
    /*
    Just a pass-through method to the AuthFactory method of the
    same name.
    */
    $scope.isAuthenticated = () => AuthFactory.isAuthenticated();

    $rootScope.$on("authenticationSuccess", function () {
        $scope.email = AuthFactory.getUser().email
   })

    // $scope.finder = event => {
    //     if (event.key === "Enter") {
    //         const employee = AuthFactory.find($scope.searchString)
    //         $location.url(`/employees/detail/${parent.id}`)
    //     }
    // }

    /*
    Unauthenticate the client.
    */
    $scope.logout = () => AuthFactory.logout();

}
)