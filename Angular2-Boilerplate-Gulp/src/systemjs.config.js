/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'components': 'components', //dist
      // angular bundles
      '@angular/core': 'lib/@angular/core/bundles/core.umd.js',
      '@angular/common': 'lib/@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'lib/@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'lib/@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'lib/@angular/http/bundles/http.umd.js',
      '@angular/router': 'lib/@angular/router/bundles/router.umd.js',
      '@angular/forms': 'lib/@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                       'lib/rxjs',
      'angular2-in-memory-web-api': 'lib/angular2-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'components': {
        main: 'main.js',
        defaultExtension: 'js'
      },
      'rxjs': {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
