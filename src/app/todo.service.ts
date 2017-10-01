import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
     todos : {todo: string, completed: boolean}[] = [];
     collections : todoCollection[] = [];
     colors : string[] = ["#8fecf7", "#8ff7bc", "#e3f78f", "#f7bf8f", "#f78fbd", "#bababa", "#ffffff"];
}
//entry object
export class todo {
    todo: string; 
    completed: boolean;
}
//notebook object
export class todoCollection {
    todos : todo[];
    collectionName : string;
    color : string;
}