
export interface Shape {
    x:number, 
    y:number,
    move():void
    draw():void 
    accept(v:Visitor):void 
}



export interface Visitor {
    visitDot(d:Dot):void,
    visitCircle(c:Circle):void,
    visitorRectangle(r:Rectangle):void
    visitorCompoundShape(cs:CompoundShape)
}
export class  CompoundShape implements Shape  {
    x: number;
    y: number;
    move(): void {
        throw new Error("Method not implemented.");
    }
    draw(): void {
        throw new Error("Method not implemented.");
    }
    accept(v: Visitor): void {
        v.visitorCompoundShape(this)
    }
    
}; 
export class Dot implements Shape {
    x: number;
    y: number;
    constructor ({x,y}) {
        this.x = x
        this.y = y
    }
    move(): void {
        console.log(`Move Circle ${this.x} and ${this.y}`)
    }
    draw(): void {
        console.log(`Draw dot ${this.x} and  ${this.y}`)
    }
    accept(v: Visitor): void {
       v.visitDot(this)
    }
}
export class Circle implements Shape {
    x: number;
    y: number;
    radius:number; 
    constructor({x,y,radius}){
        this.x = x,
        this.y = y,
        this.radius =  radius
    }

    move(): void {
        console.log(`Move Circle ${this.x} and ${this.y}`)
    }
    draw(): void {
        console.log(`Draw Circle with ${this.radius}`)
       
    }
    accept(v: Visitor): void {
        v.visitCircle(this)
    }


}

export class Rectangle implements Shape {
    x: number;
    y: number;
    angle:number; 
    constructor({x,y,angle}){
        this.x = x,
        this.y = y,
        this.angle = angle
    }
    move(): void {
        console.log(`Move Circle ${this.x} and ${this.y}`)   
    }
    draw(): void {
        console.log(`Draw Rectangle with  ${this.angle}`)
    }
    accept(v: Visitor): void {
        v.visitorRectangle(this)
    }
}
export class  XMLExportVisiter implements Visitor {
    visitorCompoundShape(cs: CompoundShape) {
    }
    visitDot(d: Dot): void {
        d.draw();
        d.move();
        console.log(`xml visiter`)
    }
    visitCircle(c: Circle): void {
        c.draw();
        c.move();
        console.log(`xml visiter`)
        
    }
    visitorRectangle(r: Rectangle): void {
        r.draw();
        r.move();
        console.log(`xml visiter`)
    
    }
}
export  class HTMLexportVisiter implements Visitor {
    visitorCompoundShape(cs: CompoundShape) {
    }
    visitDot(d: Dot): void {
        d.draw();
        d.move();
        console.log(`html visiter`)
    }
    visitCircle(c: Circle): void {
        c.draw();
        c.move();
        console.log(`html visiter`)
        
    }
    visitorRectangle(r: Rectangle): void {
        r.draw();
        r.move();
        console.log(`html visiter`)
    
    }
}
