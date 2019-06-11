# Metalink

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

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


## How to add angular metrial icons

0

Base on @theMayer answer, there is my version to make it work for package @mdi/font.

1- npm install @mdi/font --save

2- In angular.json, under architect/buid/options/styles, add "node_modules/@mdi/font/css/materialdesignicons.min.css"

3- In src\app\app.module.ts add import { MatIconModule } from '@angular/material/icon'; and add MatIconModule in imports section

4- In src\styles.scss add:

$mdi-font-path: "~@mdi/font/fonts";
@import "~@mdi/font/scss/materialdesignicons.scss";
5- Add the icon in your html using mat-icon, for example:

<mat-icon class="mdi mdi-dumbbell" aria-hidden="true"></mat-icon>
