# Agenda Application

## Description

This application combines a to-do list with a calendar to make a full agenda. Select a date and input a to-do item. The item is then shown in the calendar as well as a list of your upcoming to-do items.

My first solo project in Angular, which combines custom components with library components using template forms and observables.

## Components

To-Do Component: Contains the list of to-do's and input form. The form combines a text field with the Datepicker component from the Angular Materials library.

Data Service: A service which streams the items in the list of to-do's to the Calendar component.

Calendar Component: Presents the to-do's list in a calendar view using the CalendarView and CalendarEvent components from the Angular Calendar library.

## Getting Started

### Install dependencies

Run `npm install`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
