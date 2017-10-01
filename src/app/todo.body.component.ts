import { Component, Input, ElementRef} from '@angular/core';
import { todo, TodoService, todoCollection } from './todo.service';
import { TodoItemComponent } from './todo.item.component';

@Component ({
    selector: 'todo-body',
    templateUrl: 'todo.body.component.html',
    styleUrls: ['todo.body.component.css'],
    providers: [TodoService],
})
export class TodoBodyComponent {
    constructor(private _todoService : TodoService) {}

    newNotebook : string = "Enter a new notebook name";

    currentCollection : todoCollection;
    
    createCollection(name : string) : todoCollection{
        let newCollection = new todoCollection();
        newCollection.collectionName = name;
        newCollection.color = this._todoService.colors[this._todoService.colors.length - 1];
        newCollection.todos = [];
        this._todoService.collections.push(newCollection);

        
        return newCollection;
    }
   
    ngOnInit() {
        //creating empty notebook
        this.currentCollection = this.createCollection("new notebook");
        //setting white color as default
        this.currentCollection.color = this._todoService.colors[this._todoService.colors.length - 1];
    }

    showNewTodo(event : any) {
        //get the new entry from the input component
        let newTodo : todo = {todo: event.todo, completed : false};
        this.currentCollection.todos.push(newTodo);
    }

    itemsLeftCounter() {
        return this.currentCollection.todos.filter(t => t.completed == false).length;
    }

    areUncompleted() {
        return this.currentCollection.todos.filter(t => t.completed == true).length > 0;
    }

    clearUncompleted(event: any) {
        event.preventDefault();
        this.currentCollection.todos = this.currentCollection.todos.filter(t => t.completed == false)
    }

    changeCollection(index){
        this.currentCollection = this._todoService.collections[index];
    }

    changeColor(choosenColor){
        this.currentCollection.color = choosenColor;
    }

    addCollection(newName : string){
        //Don't allow empty name
        if (newName.trim() === '' || this._todoService.collections.
            some(col => col.collectionName === newName))
            return;
        this.currentCollection = this.createCollection(newName);
    }

    preventDefault(event){
        event.preventDefault()
    }

}
