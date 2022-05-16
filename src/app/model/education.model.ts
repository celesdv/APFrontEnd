export class education{
    id?: number;
    title: String;
    institucion: String;
    image: String;
    start: String;
    end: String;
    
    constructor(title:String, institucion:String, image:String, start:String, end:String ){
        this.title = title;
        this.institucion = institucion;
        this.image = image;
        this.start = start;
        this.end = end;
    }
}