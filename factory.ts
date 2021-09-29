import *as http from 'http';
import *as readline from 'readline'
import { WOODEN_GOODS, STEEL_GOODS } from "./const"



/// 
/// create interface of family product 
///
interface chair {
    url: string
    createChair(): void
}
interface table {
    url: string
    createTable(): void
}
///
// product
///
class woodenChair implements chair {
    url: string
    constructor() {
        console.log("woodenChair")
    }
    createChair(): void {
        throw new Error('Method not implemented.');
    }
    getUrl = () => this.url

}

class steelChair implements chair {
    url: string
    constructor() {
        console.log("steelChair")
    }
    createChair(): void {
        throw new Error('Method not implemented.');
    }
    getUrl = () => this.url


}
class woodenTable implements table {
    url: string
    constructor() {
        console.log("woodenTable")
    }
    createTable(): void {
        console.log("woodenTable")
    }
}

class steelTable implements table {
    url: string;
    constructor() {
        console.log('steelTable');
    }
    createTable(): void {
        throw new Error('Method not implemented.');
    }
    getUrl = () => this.url
}
///
// concrete factory 
//
export class steelGoods {
    steelChair: steelChair
    steelTable: steelTable
    constructor() {
    }
    getUrl = () => {
        let url = this.steelChair.getUrl() + this.steelTable.getUrl()
        return url
    }
    createGood = () => {
        new steelChair()
        new steelTable()
    }
}
export class woodenGoods {
    woodenChair: woodenChair
    woodenTable: woodenTable
    createGood = () => {
        new woodenChair()
        new woodenTable()
    }

}
//// abstractFactory class 
export default class factory {
    // define function to create product such as wooden product or steel product 
    static createWooden() {
        return new woodenGoods()
    }
    static createSteel() {
        return new steelGoods()
    }

}