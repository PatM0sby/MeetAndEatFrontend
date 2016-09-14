import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { Event } from './event.model';
import { EventsService } from './meetandeat.service';

@Component({
    selector: 'as-meetandeat',
    templateUrl: 'app/meetandeat/meetandeat.html'
})
export class MeetAndEatComponent implements OnInit {
    public todo: Todo;
           errorMessage: string;
           events: Event[];

    private list: Todo[];
    // private showCompleted: Boolean;

    constructor(private eventService: EventsService) {
    }

    ngOnInit() {
        this.getEvents();
    }

    getEvents() {
        this.eventService.getEvents()
            .subscribe(
                events => this.events = events,
                error => this.errorMessage = <any>error);
    }

    /*
     addEvent( name: string ) {
     if (!name) { return; }
     this.eventService.addEvent(name)
     .subscribe(
     hero  => this.events.push(event),
     error =>  this.errorMessage = <any>error);
     }
     */

    addTodo() {
        this.list = this.list.concat(Todo.clone(this.todo));
        this.todo.clear();
    }

    delTodo(todoIndex: number) {
        this.list = this.list.filter(
            (todo, index) => index !== todoIndex);
    }

}
