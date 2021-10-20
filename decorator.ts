interface IPizza {
    doPizza() :string;
}
class TomatoPizza implements IPizza {
    doPizza(): string {
        return "TomatoPizza"
    }

}
class ChickenPizza implements IPizza {
    doPizza(): string {
       return  "ChickenPizza";
    }
    
}
/*
Decorator
*/
class  PizzaDecorator implements IPizza {
    mPizza : IPizza;
    constructor (pizza:IPizza){
        this.mPizza = pizza;
    }
    doPizza(): string {
        return  this.mPizza.doPizza();
    }
    getPizza () : IPizza {
        return this.mPizza;
    }
    setPizza (pizza : IPizza ) : void {
        this.mPizza = pizza
    }
    
}
class PepperDecorator extends PizzaDecorator {
    constructor(mPizza : IPizza) {
        super(mPizza);
    }
     doPizza() :string {
        let type : string  = this.mPizza.doPizza();
        return type + this.addPepper();  

    }
    addPepper () : string  {
        return "Pepper";
    }
    }
class CheeseDecorator extends PizzaDecorator {
    constructor(mPizza : IPizza) {
        super(mPizza);
    }
    doPizza () :string {
        let type :string = this.mPizza.doPizza();
        return  type+ this.addCheese();
    }
    addCheese () : string  {
         return "Cheese";
    }
}
export {CheeseDecorator, PepperDecorator, IPizza, TomatoPizza, ChickenPizza , PizzaDecorator}