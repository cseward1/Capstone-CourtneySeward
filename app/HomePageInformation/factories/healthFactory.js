
angular
    .module("CapstoneApp")
    .factory("healthFactory", function ($http, $timeout, $location, $route, $routeParams) {
        return Object.create(null, {
            "cache": {
                value: null,
                writable: true
            },


            // Performing GET requests to search for recipes
            // when do I put in the parameters?

            // authorize the user with Firebase (that is why you are calling the token ID):
            "getRecipes": {
                value: function (searchString) {
                    return firebase.auth().currentUser.getToken(true)
                        .then(idToken => {
                            return $http({
                                method: "GET",
                                url: `http://api.yummly.com/v1/api/recipes?_app_id=7633e14a&_app_key=802aa25ab2fcd5e3374f66b206bf30b8&q="${searchString}"`
                            })
                        }).then(response => {
                            return response.data.matches
                        })
                }
            },

            // Display the search list unto the Health Page:
            // "single": {
            //     value: function (key) {
            //         return $http({
            //             method: "GET",
            //             url: `https://capstone1-2f9f6.firebaseio.com/errands/${key}/.json`
            //         }).then(response => {
            //             return response.data
            //         })
            //     }
            // },


        })
    })