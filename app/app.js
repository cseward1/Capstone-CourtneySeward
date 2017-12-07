angular.module("CapstoneApp", ["ngRoute"])

const isAuth = AuthFactory => new Promise ((resolve, reject) => {
    if (AuthFactory.isAuthenticated()){
        console.log("User is authenticated, resolve route promise")
        resolve()
    } else {
        console.log("User is not authenticated, reject route promise")
        reject()
    }
})

angular.module("CapstoneApp").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider
    // /means you land on the first web page
        .when("/", {
            // landing page
            templateUrl: "app/auth/partials/registerOrLogin.html",
            controller: "AuthCtrl",
            // resolve: { isAuth }
        })
})
