import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CompletedFilterPipe, MeetAndEatComponent } from './index';


@NgModule({
    declarations: [
        CompletedFilterPipe,
        MeetAndEatComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        CompletedFilterPipe,
        MeetAndEatComponent
    ]
})
export class MeetAndEatModule {
}
