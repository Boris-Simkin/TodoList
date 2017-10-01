import {Component, Output, EventEmitter, Input  } from '@angular/core';

@Component({
    selector: 'my-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
    @Output()
    change: EventEmitter<any> = new EventEmitter();
    @Input('isChecked') isChecked : boolean;
    
    ngOnInit() {
    }

    toggleCheckbox() {
        this.isChecked = !this.isChecked;
        this.change.emit(null);
    }
}