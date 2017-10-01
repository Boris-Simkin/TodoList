import { Component, Input } from '@angular/core';
import { TodoService, todo, todoCollection } from './todo.service';

@Component({
    selector: 'todo-item',
    templateUrl: './todo.item.component.html',
    styleUrls: ['./todo.item.component.css'],
})
export class TodoItemComponent {
    private mouseover: boolean;
    private editMode: boolean;

    @Input() mycontent: todo;
    @Input() currentCollection: todoCollection;

     constructor(private _todoService: TodoService) { }

    checkboxToggle() {
        this.mycontent.completed = !this.mycontent.completed;
    }

    deleteItem() {
        this.currentCollection.todos =
        this.currentCollection.todos.filter(obj => obj !== this.mycontent);
    }

    editTodo() {
        if (!this.mycontent.completed)
            this.editMode = true;
    }

    saveDoto(event) {
        this.mycontent.todo = event;
        this.editMode = false;
        
    }
}



