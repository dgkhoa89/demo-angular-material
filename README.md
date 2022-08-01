# add angular material
command ->      ng add @angular/material    
- see different in source control version
    - index.html:
        + icon
        + roboto font
- test Material by adding a button

# create module which contains material modules
Badge can bind class value

# mat progress spinner
provide two components
    - mat-progress-spinner
    - mat-spinner

# Toolbar component
toolbar component is needed to create a navbar

# Side nav
- always hidden by default
- two ways binding
    [(opened)]="navIsOpen"
- mode
    over--> default mode
    push
- Listen to open/close events of sidenav
    
# Menus
- is list of choices of temporary s
- matmenumodule
- Need to be trigger or programaticly 
    [matMenuTriggerFor]="subMenu"
- reference variable:
    #appMenu, #subMenu
- Possition

- integrate with ng-template

# Layout element - List
MatListModule
MatDividerModule --> divide list 

# Grid List
- Need to define number of columns
- colspan | rowspan
- height of each row in the grid
    rowHeight=50px
    rowHeight=2:1
    rowHeight="fit" style="height:100px" --> fit inside the container
- gutterSize

# Expansion panel
- simple expansion panel
- accordion

# Stepper
linear : meaning need to complete 2 before go to 3
    














# DemoAngularMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
