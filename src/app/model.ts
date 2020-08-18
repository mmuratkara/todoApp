import { NgModel } from '@angular/forms';

export class Model {
  user;
  items;

  constructor() {
    this.user = 'Murat';
    this.items = [
      new TodoItem('Kahvaltı', true),
      new TodoItem('Spor', true),
      new TodoItem('İş', false),
      new TodoItem('Buluşma', false),
      new TodoItem('Sinema', false),
      new TodoItem('Akşam Ymeği', false),
      new TodoItem('Uyku', false),
    ];
  }
}
export class TodoItem {
  description;
  action;
  constructor(description, action) {
    this.description = description;
    this.action = action;
  }
}
