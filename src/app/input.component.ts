import { Component, Input, Output, EventEmitter } from '@angular/core';
import { todo } from './todo.service';

@Component({
    selector: 'my-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent {

    @Output()
    added: EventEmitter<todo> = new EventEmitter<todo>();
    addTodo(event: any) {
        //Prevent creating empty todo
        if (event.target.children[0].value.trim() === ''){
            event.target.children[0].value = '';
            return;
        }
            
        let str = event.target.children[0].value;
        //Clear the input value 
        event.target.children[0].value = '';
        let newTodo : todo = {completed: false, todo:str};
        this.added.emit(newTodo);
    }
}
