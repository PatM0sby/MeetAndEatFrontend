import { NgModule } from '@angular/core';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { TodolistModule } from './todolist/todolist.module';
import { MeetAndEatModule } from './meetandeat/meetandeat.module';
import { EventsModule } from './event/events.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NavbarModule,
        HomeModule,
        TodolistModule,
        MeetAndEatModule,
        EventsModule,
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
