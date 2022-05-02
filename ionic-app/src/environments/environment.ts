// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const apiHost = 'http://localhost:8080/';

export const environment = {
  production: false,
  apiUrl: `${apiHost}api`,
  oidcConfig: {
    client_id: '0oa4w1hm2m9UyvfOQ5d7',
    server_host: 'http://localhost:9080/auth/realms/jhipster',
    redirect_url: window.location.origin + '/callback',
    end_session_redirect_url: window.location.origin + '/logout',
    scopes: 'openid profile',
    pkce: true,
    audience: 'api://default',
  },
  scheme: 'dev.localhost.ionic:/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
