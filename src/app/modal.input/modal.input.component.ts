import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './modal.input.component.html',
})
export class modalInputComponent  { 
  @ViewChild('inputField') inputField : ElementRef;
  rForm: FormGroup;
  entry: string;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'entry':[null, Validators.required]
    });
  }

  ngOnInit() {
    
  }

  @Input('message') message : string;

  @Output()
  submit: EventEmitter<string> = new EventEmitter();

  clearValue() {  
    this.inputField.nativeElement.value = '';
  }

  onSubmit() {
    let value = this.inputField.nativeElement.value;
    if (value != '')
      this.submit.emit(value);
    this.clearValue();
  }

}
