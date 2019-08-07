import { Component } from '@angular/core';
import { Model,TodoItem } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new Model();
  getName(){
    return this.model.user;
  }
  getToDoItems(){
    //将done=true的过滤掉
    return this.model.items.filter(item=>!item.done);
  }
  addToDoItem(newItem){
    // newItem = newItem.trim();
    if (newItem!=''){
      console.log(newItem);
      this.model.items.push(new TodoItem(newItem,false));
    }
  }
}
