import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './ToDo/todo.component';
import { CalendarComponent } from './Calendar/calendar.component';
import { dataService } from './dataservice';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AgendaComponent } from './Agenda/agenda.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    CalendarComponent,
    AgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMatTimepickerModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
