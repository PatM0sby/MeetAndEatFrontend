import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { MeetAndEatRoutes } from "./meetandeat/meetandeat.routes";
import { EventsRoutes } from './event/events.routes';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...MeetAndEatRoutes,
    ...EventsRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
