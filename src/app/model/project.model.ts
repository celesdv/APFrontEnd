export class project{
    id?: number;
    name: String;
    percentage: number;
    
    constructor(name:String, percentage:number){
        this.name = name;
        this.percentage = percentage;
    }
}