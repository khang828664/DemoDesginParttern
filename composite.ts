interface Graphic {
    move(x: number, y: number): void
    draw(): void
}
class CompoundGraphic implements Graphic {
    listGraphic: Graphic[] = []
    add(param: Graphic) {
        //add pram to list 
        this.listGraphic.push(param)
    }
    remove(param: Graphic) {
        this.listGraphic.filter((value, index, listParam) => {
            if (param == value) {
                this.listGraphic.splice(index - 1, index)
            }
        })
    }
    move(x: number, y: number): void {
        for (let items of this.listGraphic) {
            items.move(x, y)
        }
    }
    draw(): void {
        for (let items of this.listGraphic) {
            items.draw()
        }
    }

}
class Dot implements Graphic {
    x: number
    y: number
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    move(x: number, y: number): void {
        this.x = this.x + x
        this.y = this.y + y
    }
    draw(): void {
        console.log("Draw Dot")
        console.log("x:" + this.x)
        console.log("y:" + this.y)
    }

}
class Circle extends Dot {
    x: number;
    y: number;
    radius: number
    constructor(x, y, radius) {
        super(x, y)
        this.radius = radius
    }
    move(x: number, y: number): void {
        this.x = this.x + x
        this.y = this.y + y
    }
    draw(): void {
        console.log("Draw circle with radius" + this.radius.toString())
        console.log("x:" + this.x)
        console.log("y:" + this.y)
    }

}
export { Dot, Circle, CompoundGraphic, Graphic }