import { Component, OnInit } from "@angular/core";
import { ToDo } from "./todo";
import { DataService } from "../dataservice";
import { CalendarEvent } from "angular-calendar";

@Component ({
    selector: "pm-todo",
    templateUrl: "todo.component.html",
    styleUrls: ["todo.component.css"]
})

export class ToDoComponent implements OnInit {
    title = "Agenda";
    todos: ToDo[] = [
        {
            content: "First ToDo",
            datetime: new Date(),
            strdatetime: this.formatDate(new Date()),
            completed: false
        },
        {
            content: "Second ToDo",
            datetime: new Date(),
            strdatetime: this.formatDate(new Date()),
            completed: true
        }
    ];
    inputDate: Date = new Date();
    inputTime: string = "12:00 AM";
    inputToDo: string = "";

    constructor (private _userData: DataService) {}

    ngOnInit(): void {
        this._userData.changeUserData(this.convToDoCalEvent(this.todos));
        this._userData.curList.subscribe();
    }

    toggleDone (id: number) {
        this.todos.map((v, i) => {
            if (i == id) v.completed = !v.completed;

            return v;
        })
    }

    delToDo (id: number) {
        this.todos = this.todos.filter((v,i) => i != id);
    }

    formatDateTime(d:Date, t:string): string {
        const date = String(d).split(" ", 4);
        const strdatetime =  date [1] + " " + date[2] + " " + date[3] + " " + t;
        return strdatetime;
    }

    formatDate(d:Date): string {
        const date = String(d).split(" ", 5);
        const strdatetime = date [1] + " " + date[2] + " " + date[3] + " " + date[4];
        return strdatetime;
    }

    convToDoCalEvent(list:ToDo[]): CalendarEvent[] {
        const evs: CalendarEvent[] = [];
        for (let e of list) {
            evs.push({
              start: e.datetime,
              title: e.content
            });
          }
        return evs;
    }

    addToDo () {
        //console.log(this.formatDateTime(this.inputDate, this.inputTime))
        this.todos.push({
            content: this.inputToDo,
            datetime: new Date(this.formatDateTime(this.inputDate, this.inputTime)),
            strdatetime: this.formatDateTime(this.inputDate, this.inputTime),
            completed: false
        })
        this._userData.changeUserData(this.convToDoCalEvent(this.todos));
        this.inputDate = new Date();
        this.inputTime = "";
        this.inputToDo = "";
    }
}