# LaunchPrograms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technology Stack

1. HTML
2. CSS
3. Typescript
4. Angular 10
5. Angular Universal
6. Angular CLI
7. Node JS
8. CI/CD Heroku
9. Bootstrap CSS Framework
10. Karma and Jasmine for unit testing
11. RxJS

## Approach

1. Application is divided into 3 components namely --> cards component, filter component and root component called APP component.
2. API is called when server renders the index html on client browser to fetch all the launch programs.
3. The API result are passed to the cards component to load the particular cards of each launch program type.
4. Filter component buttons are loaded from the app constants file.
5. Filter Component user interactions are handled through event emitter and data is passed to app component to fetch particular information.
6. Filter component user selections are cached at the localstorage for application state management.
7. when user refreshes the browser, filter component selections are read from localstorage and mapped appropriately.
8. whenever user select multiple filters, the query parameters are constructed accordingly and appended to the URL.
9. Loader/spinner functionality is handled through loader service and http interceptors.
10. All the API calls, subscriptions and unsubscriptions are handled using RxJS. 
