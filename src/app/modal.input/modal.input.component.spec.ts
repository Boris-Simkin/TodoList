import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { modalInputComponent } from './modal.input.component';

describe('inputComponent', () => {
  let component: modalInputComponent;
  let fixture: ComponentFixture<modalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ modalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(modalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
