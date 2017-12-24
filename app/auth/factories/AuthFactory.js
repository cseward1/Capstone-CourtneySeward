// Factory for the Register or Login Page:

angular.module("CapstoneApp")
.factory("AuthFactory", function ($http, $timeout, $location, $route) {
    let currentUserData = null

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            currentUserData = user
            
            // after i log in it is taking me to the Homepage
            // this code when you refresh will keep you on the home page after logged in
            // if ($location.url() !== "/HomePageInformation/homePage") {
            //     $timeout(function () {
            //         // $location.url("/HomePageInformation/homePage")
            //     }, 500)
            // } else {
                $route.reload()
            // }

        } else {
            currentUserData = null
            console.log("User is not authenticated")
            $timeout(function () {
                $location.url("/auth")
            }, 500)
        }
    })

    return Object.create(null, {
        isAuthenticated: {
            value: () => {
                const user = currentUserData
                return user ? true : false
            }
        },
        getUser: {
            value: () => currentUserData
        },
        logout: {
            value: () => firebase.auth().signOut()
        },
        authenticate: {
            value: credentials =>
                firebase.auth()
                        .signInWithEmailAndPassword(
                            credentials.email,
                            credentials.password
                        )
        },
        registerWithEmail: {
            value: user =>
                firebase.auth()
                        .createUserWithEmailAndPassword(
                            user.email,
                            user.password
                        )
        }
    })
})