// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC-Djnxru7EeVhS1CTa7po-JgBjObwVAOE",
    authDomain: "final-project-angular-6ffe2.firebaseapp.com",
    databaseURL: "https://final-project-angular-6ffe2.firebaseio.com",
    projectId: "final-project-angular-6ffe2",
    storageBucket: "final-project-angular-6ffe2.appspot.com",
    messagingSenderId: "146492398491"
  },
  google: {
    apiKey: 'AIzaSyAHpQUwvjE9_V16fxFkOdydAsZda8Qnwbk',
    libraries: ["places"]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
