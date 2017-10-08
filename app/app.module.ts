import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { TodoFormComponent } from './todo-form/todo-form.component'
import { TodoListComponent } from './todo-list/todo-list.component'
 
@NgModule({
    imports: [BrowserModule, FormsModule], /*модуль браузера*/
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent
    ], /*декларація компонента, модуль має такі компонент*/
    bootstrap: [AppComponent] /*для запуску додатка використовується компонент*/
})/*@ - анотація, декоратор, містить метадані класу*/

export class AppModule {

}