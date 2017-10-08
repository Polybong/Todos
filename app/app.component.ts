import { Component } from '@angular/core'



@Component({
    moduleId: module.id,    /*шоб писати назви файлів, без зазначенням шляху до них.*/
    selector: 'app',     /*назва тега компонента*/
    templateUrl: 'app.component.html', /*html код компонента*/
    styleUrls: ['app.component.css'] /*стилі компонента*/
})    /*декоратор*/

export class AppComponent { 
    title = 'Hello Yura';
  
    
  
}

