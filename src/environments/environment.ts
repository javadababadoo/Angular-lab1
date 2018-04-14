// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAG07K-DTlcApkoMbNOu6xS5nLORVCs3Xw',
    authDomain: 'angular-lab-chat.firebaseapp.com',
    databaseURL: 'https://angular-lab-chat.firebaseio.com',
    projectId: 'angular-lab-chat',
    storageBucket: 'angular-lab-chat.appspot.com',
    messagingSenderId: '608022156771'
  }
};
