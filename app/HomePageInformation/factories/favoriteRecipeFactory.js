// Favorite Recipe Factory:


// Posting the Favorite recipe to Firebase:
angular.module("CapstoneApp")
    .factory("favoriteRecipeFactory", function ($http) {
        return Object.create(null, {
            "cache": {
                value: null,
                writable: true
            },
            "add": {
                value: function (recipe) {
                    return firebase.auth().currentUser.getToken(true)
                        .then(idToken => {
                            return $http({

                                method: "POST",
                                url: `https://capstone1-2f9f6.firebaseio.com/recipe/.json?auth=${idToken}`,

                                data: recipe



                            }).catch(function (error) {
                                console.log(error)
                            })
                        })
            }
            }


        })
    })
