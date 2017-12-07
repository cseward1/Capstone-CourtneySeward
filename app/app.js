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
    // the "/" means you land on the first web page avliable or landing page
    // insert the partial you are on and what controller you want to use for that page, the controller will house that factory
        // .when("/", {
        //     // landing page and what controller that landing page will use
        //     templateUrl: "app/auth/partials/registerOrLogin.html",
        //     controller: "AuthCtrl",
        //     // resolve: { isAuth }
        // })
        .when("/auth", {
            // landing page and what controller that landing page will use
            templateUrl: "app/auth/partials/registerOrLogin.html",
            controller: "AuthCtrl",
            // resolve: { isAuth }
        })
})
