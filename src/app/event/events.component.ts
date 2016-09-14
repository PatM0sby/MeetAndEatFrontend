import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { EventService } from './events.service';


@Component({
    selector: 'as-events',
    templateUrl: 'app/event/events.html'
})
export class EventsComponent implements OnInit {
    public event: Event;
    public errorMessage: string;
    private events: Event[];
    private fileToUpload: File;
    constructor(private eventService: EventService) {
        this.event = new Event("", "", "", null, null, null, null, null);
        // this.events = [
        //    new Event('Pizza', 6, [ 'assets/images/Vegan.png' , 'assets/images/Halal.png' ], 'tasty',
        //        'assets/images/Pizza.jpg', 'home', 'aa', 3),
        //   new Event('Pizza', 6, [ 'assets/images/Vegan.png' ], 'tasty',
        //        'assets/images/Pizza.jpg', 'home', 'aa', 3)
        // ];
    }

    ngOnInit() {
        this.getEvents();
    }

    getEvents() {

        this.eventService.getEvents()
            .subscribe(
                events => { this.events = events;
                console.log(this.events); },
                error => this.errorMessage = <any>error);
    }

    addEvent() {
        this.events = this.events.concat(Event.clone(this.event));
        this.event.clear();
    }

    upload() {
        this.makeFileRequest("http://localhost:3000/api/events", this.fileToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    makeFileRequest(url: string, files: File) {
        return new Promise((resolve, reject) => {
            let formData: any = new FormData();
            let xhr = new XMLHttpRequest();
                formData.append("uploads[]", files, files.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}
