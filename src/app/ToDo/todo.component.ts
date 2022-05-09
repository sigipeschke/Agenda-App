import { Component, OnInit } from "@angular/core";
import { ToDo } from "./todo";
import { dataService } from "../dataservice";

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
    inputDate: Date = new Date();
    inputTime: string = "12:00 AM";
    inputToDo: string = "";

    constructor (private _userData: dataService) {}

    ngOnInit(): void {
        this._userData.setUserData(this.todos);
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

    addToDo () {
        //console.log(this.formatDateTime(this.inputDate, this.inputTime))
        this.todos.push({
            content: this.inputToDo,
            datetime: new Date(this.formatDateTime(this.inputDate, this.inputTime)),
            strdatetime: this.formatDateTime(this.inputDate, this.inputTime),
            completed: false
        })
        this._userData.setUserData(this.todos);
        this.inputDate = new Date();
        this.inputTime = "";
        this.inputToDo = "";
    }
}