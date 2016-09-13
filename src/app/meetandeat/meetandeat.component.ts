import { Component } from '@angular/core';

import { Todo } from './todo.model';

@Component({
    selector: 'as-meetandeat',
    templateUrl: 'app/meetandeat/meetandeat.html'
})
export class MeetAndEatComponent {
    public todo: Todo;
    private list: Todo[];
    private showCompleted: Boolean;

    constructor() {
        this.showCompleted = true;
        this.todo = new Todo('Add me to list!', false);
        this.list = [
            new Todo('Data from Database'),
            new Todo('PutDispenserHere', true)
        ];
    }

    addTodo() {
        this.list = this.list.concat(Todo.clone(this.todo));
        this.todo.clear();
    }

    delTodo(todoIndex: number) {
        this.list = this.list.filter(
            (todo, index) => index !== todoIndex);
    }
}
