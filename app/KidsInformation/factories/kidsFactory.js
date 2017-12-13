angular
    .module("CapstoneApp")
    .factory("kidsFactory", function ($http, $timeout, $location, $route) {
        return Object.create(null, {
            "cache": {
                value: null,
                writable: true
            },
            // authroize the user with Firebase-  that is why you are calling the token
            "list": {
                value: function (user) {
                    return firebase.auth().currentUser.getToken(true)
                        .then(idToken => {
                            return $http({
                                method: "GET",
                                url: `https://capstone1-2f9f6.firebaseio.com/kids/.json?orderBy="ParentID"&equalTo="${user}"&auth=${idToken}`
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

            // Trying to get the kid's data unto the Home Page:
            "single": {
                value: function (key) {
                    return $http({
                        method: "GET",
                        url: `https://capstone1-2f9f6.firebaseio.com/kids/${key}/.json`
                    }).then(response => {
                        return response.data
                    })
                }
            },
          

            // Steps: make differnet posts that you view as collections
            // Simply put the information in Firebase into different collections
            // the collection below is the "kid(s) info collection"
            "add": {
                value: function (kid) {
                    console.log(kid)
                    return firebase.auth().currentUser.getToken(true)
                        .then(idToken => {
                            console.log(idToken)
                            return $http({
                                "url": `https://capstone1-2f9f6.firebaseio.com/kids/.json?auth=${idToken}`,
                                "method": "POST",
                                "data": kid
                            })
                        }).catch(function (error) {
                            console.log(error)
                        })
                }
            }
        })
    })
