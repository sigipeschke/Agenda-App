import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { ToDo } from "./todo";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  title = "Agenda";
  inputDate: Date = new Date();
  inputTime: string = "12:00 AM";
  inputToDo: string = "";

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [];
  todos: ToDo[] = [
    {
        content: "First ToDo",
        datetime: new Date("May 8, 2022" + " 12:00 AM"),
        strdatetime: this.formatDateTime(new Date("May 8, 2022"), "12:00 AM"),
        completed: false
    },
    {
        content: "Second ToDo",
        datetime: new Date("May 10, 2022" + " 1:00 PM"),
        strdatetime: this.formatDateTime(new Date("May 10, 2022"), "1:00 PM"),
        completed: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.events = this.updateEvents();
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
        if (i == id) v.completed = !v.completed;

        return v;
    })
  }

  delToDo(id: number) {
      this.todos = this.todos.filter((v,i) => i != id);
      this.events = this.updateEvents();
  }

  formatDateTime(d:Date, t:string): string {
      const date = String(d).split(" ", 4);
      const strdatetime =  date [1] + " " + date[2] + " " + date[3] + " " + t;
      return strdatetime;
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.inputDate = date;
    this.viewDate = date;
    this.setView(CalendarView.Day);
  }

  addToDo() {
      this.todos.push({
          content: this.inputToDo,
          datetime: new Date(this.formatDateTime(this.inputDate, this.inputTime)),
          strdatetime: this.formatDateTime(this.inputDate, this.inputTime),
          completed: false
      })
      this.events = this.updateEvents();
      this.inputDate = new Date();
      this.inputTime = "";
      this.inputToDo = "";
  }

  updateEvents():CalendarEvent[] {
    const arr = [];
    for (let e of this.todos) {
      arr.push({
        start: e.datetime,
        title: e.content
      });
    }
    return arr;
  }
}
