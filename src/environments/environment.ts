// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'https://us-central1-go4electric-dev.cloudfunctions.net/',
  firebase: {
    apiKey: 'AIzaSyDslbqVYKvQXA7-sk9h3WrZVEmoNtDsWaE',
    authDomain: 'go4electric-dev.firebaseapp.com',
    databaseURL: 'https://go4electric-dev.firebaseio.com',
    projectId: 'go4electric-dev',
    storageBucket: 'go4electric-dev.appspot.com',
    messagingSenderId: '591805878852',
    appId: '1:591805878852:web:27a47aa7324d975b3aa211',
    measurementId: 'G-YT77CZ1JT3'
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