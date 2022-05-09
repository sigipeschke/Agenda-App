import { Injectable } from "@angular/core";
import { ToDo } from "./ToDo/todo";


@Injectable()

export class dataService {
    list: ToDo[] = [];
    
    constructor() {}

    getUserData() {
        return this.list;
    }

    setUserData(data:ToDo[]) {
        this.list = data;
    }
}