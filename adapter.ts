// Target Interface 
interface Target {
    request(parma): void
}


// declare service  
interface serviceInterface {
    specificRequest(param): void // receive request  
}
class service implements serviceInterface {
    specificRequest(data: string): void {
        let index = 0;
        let a = setInterval(() => {
            index = index + 10
            console.log(`receive request ..... ${index + 10}%`)
        }, (100))
        setTimeout(() => {
            console.log("sevice receive word complete:")
            console.log(`work is :${data} `)
            clearInterval(a)
        }, 1000);
    }
}
{

}

///
/// declare Adapter
interface Adapter {
    Adaptee: service,
    request(data): void
}
class Adapter implements Adapter, Target {
    Adaptee: service;
    constructor(param: service) {
        this.Adaptee = param
    }
    request(data: any): void {
        let index = 0;
        console.log(`reading request`)
        console.log(data)
        let a = setInterval(() => {
            index = index + 10
            console.log(`In Translate request ..... ${index + 10}%`)
        }, (100))
        setTimeout(() => {
            console.log("Translate complete:")
            this.Adaptee.specificRequest(this.translate())
            clearInterval(a)
        }, 1000);
    }
    translate = (): string => "こんにちは"
}
export { Target, Adapter, service }