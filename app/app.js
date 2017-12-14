angular.module("CapstoneApp", ["ngRoute", "angular.filter"])

const isAuth = AuthFactory => new Promise((resolve, reject) => {
    if (AuthFactory.isAuthenticated()) {
        console.log("User is authenticated, resolve route promise")
        resolve()
    } else {
        console.log("User is not authenticated, reject route promise")
        reject()
    }
})

angular.module("CapstoneApp").config(function ($routeProvider) {

    //  Configure all Angular application routes here:
    $routeProvider

        // Overall Notes about the "App.js" file:
            // the "/" displays what you will see on the end of the URL
            // the Template URL: is where you insert the partial you want to display and what controller you want to use for that page 
            // The controller file will house the specfic factory you need

        // Partial call for the login page to log in and log out succesfully:
        .when("/auth", {
            // this ".when" is for displaying login and logout pages correctly:
            templateUrl: "app/auth/partials/registerOrLogin.html",
            controller: "AuthCtrl",
            // resolve: { isAuth }
        })

        // Partial Call to pull up the registration form:
        .when("/register", {
            templateUrl: "app/auth/partials/registerform.html",
            controller: "RegisterCtrl",
            // resolve: { isAuth }
        })

// Partial for when the "save Child" button is clicked
        .when("/register", {
            templateUrl: "app/auth/partials/registerform.html",
            controller: "RegisterCtrl",
            // resolve: { isAuth }
        })
        // Partial call for connecting the login to the Home page after a user logs in:
        .when("/HomePageInformation/homePage", {
            templateUrl: "app/HomePageInformation/partials/homePage.html",
            controller: "homePageCtrl",
            // resolve: { isAuth }
        })
        
        // Routing Calls for the Buttons on the Home Page:
        .when("/HomePageInformation/healthPage", {
            templateUrl: "app/HomePageInformation/partials/healthPage.html",
            controller: "healthCtrl",
            // resolve: { isAuth }
        })
            // Routing call to display the Errands Page:
        .when("/HomePageInformation/errands", {
            templateUrl: "app/HomePageInformation/partials/errands.html",
            controller: "errandCtrl",
            // resolve: { isAuth }
        })
        //     // Routing call to display the nanny LogPage:
        .when("/HomePageInformation/favoriteRecipes", {
            templateUrl: "app/HomePageInformation/partials/favoriteRecipes.html",
            controller: "favoriteRecipeCtrl",
            // resolve: { isAuth }
        })
        .otherwise('/HomePageInformation/homePage')

        // // Routing call to display the kids information on the home page:
        //      .when("/HomePageInformation/homePage", {
        //         templateUrl: "app/HomePageInformation/partials/homePage.html",
        //         controller: "RegisterCtrl",
        //         // resolve: { isAuth }
        //     })
    

    // closing brackets below are for the function that chains the .when calls. House all of my ".when" calls within this function
})
