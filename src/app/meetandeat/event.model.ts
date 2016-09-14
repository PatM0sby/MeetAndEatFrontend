/**
 * Created by Pat on 13.09.2016.
 */

export class Event {
    public name: string;


    constructor(name: string) {
        this.name = name;
    }

    clear() {
        this.name = '';

    }
}
