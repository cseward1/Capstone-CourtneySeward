
angular
    .module("CapstoneApp")
    .factory("healthFactory", function ($http, $timeout, $location, $route, $routeParams) {
        return Object.create(null, {
            "cache": {
                value: null,
                writable: true
            },


            // Performing GET requests to search for recipes
            // authorize the user with Firebase (that is why you are calling the token ID):
            "getRecipes": {
                value: function (searchString, allergy) {
                    return firebase.auth().currentUser.getToken(true)
                        .then(idToken => {
                            return $http({
                                method: "GET",
                                url: `http://api.yummly.com/v1/api/recipes?_app_id=7633e14a&_app_key=802aa25ab2fcd5e3374f66b206bf30b8&q="${searchString}"&requirePictures=true&allowedAllergy[]=${allergy}`
                            })
                        }).then(response => {
                            return response.data.matches
                        })
                }
            },
            // get the ingredients on the page
            "getRecipeIngredients": {
                value: function (recipe) {
                    return firebase.auth().currentUser.getToken(true)
                        .then(idToken => {
                            return $http({
                                method: "GET",
                                url: `http://api.yummly.com/v1/api/recipe/${recipe}?_app_id=7633e14a&_app_key=802aa25ab2fcd5e3374f66b206bf30b8&`
                            })
                        }).then(response => {
                            return response.data
                        })
                }
            },

            // Now make a get request for the recipe information:


            // Insert Pictures on the Page:
            // &requirePictures=true
            // Take in the Allergy Filter:
            // allowedAllergy[]
      

        })
    })