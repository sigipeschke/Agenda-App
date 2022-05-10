import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ToDo } from "./ToDo/todo";
import { CalendarEvent } from 'angular-calendar';


@Injectable()

export class DataService {
    private listSource = new BehaviorSubject<CalendarEvent[]>([]);
    curList = this.listSource.asObservable();

    constructor() {}

    changeUserData(data:CalendarEvent[]) {
        this.listSource.next(data);
    }
}