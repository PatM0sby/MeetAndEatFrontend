export class Event {
    public name: string;
    public numberofseats: number;
    public tags: [string];
    public description: string;
    public picture: string;
    public address: string;
    public selection: string;
    public date: Date;
    public priceperperson: number;

    static clone(event: Event): Event {
        return new Event(event.name, event.numberofseats, event.tags, event.description, event.picture,
            event.address, event.selection, event.priceperperson);
    }

    constructor(name: string, numseats: number, tags: [string], desc: string, picture: string,
                address: string, selection: string, price: number) {
        this.name = name;
        this.numberofseats = numseats;
        this.tags = tags;
        this.description = desc;
        this.picture = picture;
        this.address = address;
        this.selection = selection;
        this.priceperperson = price;
        this.date = new Date();
    }

    clear() {
        this.name = '';
        this.numberofseats = null;
        this.tags = [''];
        this.description = '';
        this.picture = '';
        this.address = '';
        this.selection = '';
        this.date = null;
        this.priceperperson = null;
    }
}
