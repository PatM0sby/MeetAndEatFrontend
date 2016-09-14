import { Logger } from "./logger.service";
import { EventService } from './event/events.service';
import { EventsService } from './meetandeat/meetandeat.service';
export const APP_PROVIDERS = [
    Logger,
    EventService,
    EventsService
];
