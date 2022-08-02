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
    
# Input 
- module  
    input 
    formField
- float type: nerver & always, auto=default
- matInput isRequired?
- appearance

# Select
- included demo two way binding [(value)] = "compoent_var"
- should have a option with no value
- matOptGroup

# auto complete
MatAutocompleteModule
- create a template variable in html and assign value
    #auto
    https://angular.io/guide/template-reference-variables
- map the variable to input autocomplete value
    [matAutocomplete]="auto"

# data picker
- combine of input and a data picker popup, and a date picker toggle
- Allow set min | max for date
- Allow filter out certain date: for example weekend

# table
4 parts:
    - datasource
        + interface
        + array of interface object
    - provide data source to data table 
        dothis in html
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
    - define column templates
        + ngContainer: will not render, but contain matColumnDef
            <ng-container matColumnDef="demo-position">
            + inside container allow to define the Header and Cell
        + matColumnDef has a key, to links to the defined column in component.ts
            displayedColumns: string[] = ['demo-positions', 'demo-name', 'demo-weight', 'demo-symbol'];
    - define the rows in data table














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
