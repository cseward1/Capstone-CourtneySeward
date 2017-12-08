angular
.module("CapstoneApp")
.factory("kidsFactory", function ($http, $timeout, $location, $route){
    return Object.create(null, {
        "cache": {
            value: null,
            writable: true
        },
        // authroize the user with Firebase-  that is why you are calling the token
        "list": {
            value: function () {
                return firebase.auth().currentUser.getToken(true)
                .then(idToken => {
                return $http({
                    method: "GET",
                    url: `https://capstone1-2f9f6.firebaseio.com/kids/.json?auth=${idToken}`
                    // url: "https://angular-employees-6727b.firebaseio.com/employees/.json"
                })
                }).then(response => {
                    const data = response.data
// setting the key as a property called "id"
                console.log(data)
                    this.cache = Object.keys(data).map(key => {
                        data[key].id = key
                        return data[key]
                    })

                    return this.cache
                })
            }
        },
        // "single": {
        //     value: function (key) {
        //         return $http({
        //             method: "GET",
        //             url: `https://angular-employees-6727b.firebaseio.com/employees/${key}/.json`
        //         }).then(response => {
        //             return response.data
        //         })
        //     }
        // },
        // "murder": {
        //     value: function (key) {
        //         return $http({
        //             method: "DELETE",
        //             url: `https://angular-employees-6727b.firebaseio.com/employees/${key}/.json`
        //         })
        //     }
        // },
        // "find": {
        //     value: function (searchString) {
        //         const result = this.cache.find(emp => {
        //             return emp.firstName.includes(searchString) ||
        //                    emp.lastName.includes(searchString)
        //         })
        //         return result
        //     }
        // },
        // "fire": {
        //     value: function (employee, key) {
        //         employee.employmentEnd = Date.now()

        //         return $http({
        //             method: "PUT",
        //             url: `https://angular-employees-6727b.firebaseio.com/employees/${key}/.json`,
        //             data: employee
        //         })
        //     }
        // },



        // Steps: make differnet posts that you view as collections
        // Simply put the information in Firebase into different collections
        // the collection below is the "kid(s) info collection"
        "add": {
            value: function (kid) {
                return firebase.auth().currentUser.getToken(true)
                    .then(idToken => {
                        console.log(idToken)
                        return $http({
                            "url": `https://capstone1-2f9f6.firebaseio.com/kids/.json?auth=${idToken}`,
                            "method": "POST",
                            "data":kid
                        })
                    }).catch(function(error) {
                        console.log(error)
                    })
            }
        }
    })
})
