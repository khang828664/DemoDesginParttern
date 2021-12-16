import { addAbortSignal } from "stream"
import { HOUSE_1, HOUSE_2 } from './const'

/// Builder Interface
interface BuilderHouse {
    result: string
    reset(): void
    buildRoof(param: string): void
    buildBody(param: string): void
    buildDoor(param: string): void
    buildWindow(param: string): void
    getResult(): string
}
/// concrete builder
class house_1 implements BuilderHouse {
    result: string = ""
    constructor() {
        this.result = ""
    }
    reset(): house_1 {
        return new house_1()
    }
    buildRoof(param: string): void {
        this.result = this.result + param
    }
    buildBody(param: string): void {
        this.result = this.result + param
    }
    buildDoor(param: string): void {
        this.result = this.result + param
    }
    buildWindow(param: string): void {
        this.result = this.result + param
    }
    getResult = () :string => this.result

}
class house_2 implements BuilderHouse {
    result: string 
    constructor() {
        this.result = ""
    }
    reset(): void {
        this.result = ""
    }
    buildRoof(param: string): void {
        this.result = this.result + param
    }
    buildBody(param: string): void {
        this.result = this.result + param
    }
    buildDoor(param: string): void {
        this.result = this.result + param
    }
    buildWindow(param: string): void {
        this.result = this.result + param
    }
    getResult = (): string => this.result
}
/// director 
class Director {
    builder: BuilderHouse
    setBUilder = (param: BuilderHouse) => { this.builder = param }
    changeBuilder(param: BuilderHouse) {
    }
    makeType(parma: number) {

        if (parma == 1) {
            /// Build house 1
            this.builder.buildBody("woodenBody\n")
            this.builder.buildDoor("woodenDoor\n")
            this.builder.buildRoof("woodenRoof\n")
        }
        if (parma == 2) {
            // build house 2 
            this.builder.buildBody("steelBody\n")
            this.builder.buildDoor("steelDoor\n")
        }
    }
}
export { Director, house_1, house_2 }