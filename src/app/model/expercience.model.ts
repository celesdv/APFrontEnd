export class experience{
    id?: number;
    position: String;
    company: String;
    image: String;
    start: String;
    end: String;
    description: String;

    constructor(position:String, company:String, image:String, start:String, end:String, description:String){
        this.position = position;
        this.company = company;
        this.image = image;
        this.start = start;
        this.end = end;
        this.description = description;
    }
}