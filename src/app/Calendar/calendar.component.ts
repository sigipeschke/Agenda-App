// https://mattlewis92.github.io/angular-calendar/#/kitchen-sink

import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { DataService } from "../dataservice";

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

  constructor(private _userData: DataService) {}

  ngOnInit(): void {
    this._userData.curList.subscribe(list => this.events = list);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = date;
    this.setView(CalendarView.Day);
  }

}
