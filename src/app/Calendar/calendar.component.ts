// https://mattlewis92.github.io/angular-calendar/#/kitchen-sink

import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { dataService } from "../dataservice";

@Component({
  selector: 'pm-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [];

  constructor(private _userData: dataService) {}

  ngOnInit(): void {
    this.fetchDataFromService();
  }

  fetchDataFromService() {
    const data = this._userData.getUserData();
    for (let e of data) {
      this.events.push({
        start: e.datetime,
        title: e.content
      });
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    this.viewDate = date;
    this.setView(CalendarView.Day);
  }

}
