
angular.module("CapstoneApp").constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyCPN9PVFloNQHc-YZPTqdQqMPUeKAAXPMo",
    authDomain: "capstone1-2f9f6.firebaseapp.com",
    databaseURL: "https://capstone1-2f9f6.firebaseio.com",
    projectId: "capstone1-2f9f6",
    storageBucket: "capstone1-2f9f6.appspot.com",
    messagingSenderId: "179024014723"
})

angular.module("CapstoneApp").run(function (FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG)
})

// let isAuth = AuthFactory => new Promise ((resolve, reject) => {
//     if (AuthFactory.isAuthenticated()){
//         console.log("User is authenticated, resolve route promise")
//         resolve()
//     } else {
//         console.log("User is not authenticated, reject route promise")
//         reject()
//     }
// })