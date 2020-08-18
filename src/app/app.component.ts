import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoApp';
  moedel = new Model();
  isDisplay = false;

  getName() {
    return this.moedel.user;
  }
  getItems() {
    if (this.isDisplay) {
      return this.moedel.items;
    }
    return this.moedel.items.filter((item) => !item.action);
  }

  addItem(value) {
    if (value != '') {
      this.moedel.items.push(new TodoItem(value, false));
    }
  }
}
