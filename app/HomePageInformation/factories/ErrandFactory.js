angular
.module("CapstoneApp")
.factory("ErrandFactory", function ($http, $timeout, $location, $route) {
    return Object.create(null, {
        "cache": {
            value: null,
            writable: true
        },
        // authroize the user with Firebase-  that is why you are calling the token
        "list": {
            value: function (userId) {
                return firebase.auth().currentUser.getToken(true)
                    .then(idToken => {
                        return $http({
                            method: "GET",
                            url: `https://capstone1-2f9f6.firebaseio.com/errands/.json?orderBy="ParentID"&equalTo="${userId}"&auth=${idToken}`
                        })
                    }).then(response => {
                        const data = response.data
                        // setting the key as a property called "id"
                        this.cache = Object.keys(data).map(key => {
                            data[key].id = key
                            return data[key]
                            
                        })
                        return this.cache
                    })
            }
        },

        // Trying to get the errand list displaying unto the Home Page:
        "single": {
            value: function (key) {
                return $http({
                    method: "GET",
                    url: `https://capstone1-2f9f6.firebaseio.com/errands/${key}/.json`
                }).then(response => {
                    return response.data
                })
            }
        },
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
            value: function (errand) {
                console.log(errand)
                return firebase.auth().currentUser.getToken(true)
                    .then(idToken => {
                        console.log(idToken)
                        return $http({
                            "url": `https://capstone1-2f9f6.firebaseio.com/errands/.json?auth=${idToken}`,
                            "method": "POST",
                            "data": errand
                        })
                    }).catch(function (error) {
                        console.log(error)
                    })
            }
        }
    })
})
