import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './index';

@NgModule({
    declarations: [
        EventsComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        EventsComponent
    ]
})
export class EventsModule {
}
