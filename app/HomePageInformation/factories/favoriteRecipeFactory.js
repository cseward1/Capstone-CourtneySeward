// Favorite Recipe Factory:

// Posting the Favorite recipe to Firebase:
angular.module("CapstoneApp")
    .factory("favoriteRecipeFactory", function ($http) {
        return Object.create(null, {
            "cache": {
                value: null,
                writable: true
            },
            // Post the kids favorite meal unto firebase:
            // first api call to Yummly
            "kidRecipes": {
                value: function (kidid) {
                    console.log(kidid)
                    return firebase.auth().currentUser.getToken(true)
                        .then(idToken => {
                            return $http({
                                method: "GET",
                                url: `https://capstone1-2f9f6.firebaseio.com/recipe/.json?orderBy="kidid"&equalTo="${kidid}"&auth=${idToken}`
                            })
                        }).then(response => {
                            const data = response.data
                            // setting the key as a property called "id"
                            console.log("kid list return data", data)
                            this.cache = Object.keys(data).map(key => {
                                data[key].id = key
                                return data[key]

                            })
                            console.log(this.cache)
                            return this.cache
                        })
                }
            },
            // second call to yummly
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
            },
            // GET the information to display on the page:
            "single": {
                value: function (key) {
                    return $http({
                        method: "GET",
                        url: `https://capstone1-2f9f6.firebaseio.com/recipe/${key}/.json`,
                    }).then(response => {
                        return response.data
                    })
                }
            },
            // delete a recipe from firebase and the page:
            "murder": {
                value: function (recipe) {
                      return firebase.auth().currentUser.getToken(true)
            .then(idToken => {
                    return $http({
                        method: "DELETE",
                        url: `https://capstone1-2f9f6.firebaseio.com/recipe/${recipe}/.json?auth=${idToken}`})
                    }).then(response => {
                        return response.data
                    })
                }
            }

            // closing brackets
        })
    })

       