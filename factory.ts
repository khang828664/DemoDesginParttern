/**
 * interface AbstractFactory
 */
interface AbstractFactory {
    CreateKindProductA():ProductA
    CreateKindProductB():ProductB
}


/**
 * interface product
 */
interface  ProductA  {
    createProductA():void
    someFunctionA():void
}
interface ProductB {
    createProductB():void
    someFunctionB():void
}
/**
 * concrete Product 
 * concrete Product A
 */
export class ConcreteProductA implements ProductA {
    createProductA(): void {
        console.log("Product A created")
    }
    someFunctionA(): void {
        console.log("this is Concrete Product A")
    }
}
export class ConcreteProductA1 implements ProductA {
    createProductA(): void {
        console.log("Product A1 created")
    }
    someFunctionA(): void {
        console.log("this is Concrete Product A1")

    }

}
/**
 * Concrete Product B
 */
export class ConcreteProductB implements ProductB {
    createProductB(): void {
       
        throw new Error("Method not implemented.");
    }
    someFunctionB(): void {
        console.log("this is Concrete Product B")
    }
}
export class ConcreteProductB1 implements ProductB {
    createProductB(): void {
       
        console.log("Product B1 created")
        
    }
    someFunctionB(): void {
        console.log("this is Concrete Product B1")

    }

}
/**
 * Factory
 * Factory A1
 */
export class Factory implements AbstractFactory {
    CreateKindProductA(): ProductA {
        return new ConcreteProductA()
    }
    CreateKindProductB(): ProductB {
        return new ConcreteProductB()
    }

}
/**
 * Factory_1
 */
export class Factory_1 implements AbstractFactory {
    CreateKindProductA(): ProductA {
        return new ConcreteProductA1 ()
    }
    CreateKindProductB(): ProductB {
        return new ConcreteProductB1 ()
    }
}
/**
 * Client code
 *
 */
export default function Client (factory:AbstractFactory) {
    
    //Wrap create method of concreteProduct 
    const complexProductA:ProductA  = factory.CreateKindProductA()
    const complexProductB:ProductB  = factory.CreateKindProductB()
    complexProductA.someFunctionA()
    complexProductB.someFunctionB()
} 


