import { Component } from '@angular/core';
import { CONSTANTS } from './shared';
import { Logger } from './logger.service';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html'
})
export class AppComponent {
    public appBrand: string;

    constructor(private logger: Logger) {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
        logger.log('test');
    }
}//comment
