
interface TrooperPrototype {
    color: string
    clone(): TrooperPrototype
    getColor(): string
    getId(): string
    id: string
    rank: string
    getInfo(): TrooperPrototype
}
class Trooper implements TrooperPrototype {
    color: string
    id: string
    rank: string
    cloneTrooper: TrooperPrototype
    clone(): TrooperPrototype {
        const clone: TrooperPrototype  =  Object.create(this)
        return clone
    }
    getColor = () => this.color
    getId = () => this.id
    getInfo = () => this

}
class CommandoTrooper implements TrooperPrototype {
    color: string
    id: string
    rank: string
    cloneCommandoTrooper: TrooperPrototype

    clone(): this {
        let clone: this = Object.create(this)
        return clone
    }
    getId = () => this.id
    getColor = () => this.color
    getInfo = () => this
}
////
//// class  register prototype
////
class PrototypeRes {
    items: TrooperPrototype[] = []
    addItem(param: TrooperPrototype) {
        this.items.push(param)
    }
    getById(id: string): TrooperPrototype {
        for (const item of this.items) {
            if (item.id === id) {
                return item.clone()
            }
        }
    }
    getByColor(color: string) {
        for (const item of this.items) {
            if (item.getColor() === color) {
                return item.clone()
            }
        }
    }
}
export { PrototypeRes, CommandoTrooper, Trooper, TrooperPrototype }