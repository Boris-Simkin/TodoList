import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InputComponent } from './input.component';
import { HeaderComponent } from './header.component';
import { TodoBodyComponent } from './todo.body.component';
import { TodoItemComponent } from "./todo.item.component";
import { CheckboxComponent } from "./checkbox.component";
import { modalInputComponent } from './modal.input/modal.input.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HeaderComponent,
    TodoBodyComponent,
    TodoItemComponent,
    CheckboxComponent,
    modalInputComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
              { path: '', redirectTo: '/todos', pathMatch: 'full' },
              { path: 'todos', component: TodoBodyComponent}, 
              { path: 'about', component: AboutComponent}]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
