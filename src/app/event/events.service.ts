/**
 * Created by Pat on 13.09.2016.
 */

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Event } from './event.model';
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventService {
    private eventUrl = 'http://localhost:3000/api/events';  // URL to web API

    constructor(private http: Http) {
    }

    getEvents(): Observable<Event[]> {
        return this.http.get(this.eventUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }



    addEvent(event: Event): Observable<Event> {
        let body = JSON.stringify(event);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.eventUrl, body, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);


    }

    attendEvent(event: Event): Observable<Event> {
        if ( event.numberofseats > 0 ) { event.numberofseats = event.numberofseats - 1; }
        let body = JSON.stringify(event);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put( this.eventUrl + '/' + event._id , body , options)
            .map((res: Response) => res.json())
            .catch(this.handleError);


    }


    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
