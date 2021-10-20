
class Context {
    private id: string;
    private start: number;
    constructor(id:string, star :number) {
        this.id = id,
        this.start = star;
    }
    getId = ():string => this.id;
    getStar = ():number => this.start;

}
interface ISolider {
  promote(context :Context):void, 
}
/**
 * concrete Flyweight ;
 */
class Soldier implements ISolider {
    constructor(name:string) {
        this.name =  name ;
        console.log(`solder is create ${this.name}`);
    }
    private  name :string = "";
    
    promote(context: Context): void {
        console.log(`${this.name} ${context.getId()} promoted ${context.getStar} `);
    }
}
/**
 * FlyWeigh factory 
 */ 
interface ISoldiers{
    [type:string]: ISolider,
}
class SoldierFactory {
    constructor(parameters) {
        
    }
    static soldiers : ISoldiers 
    static sync

}