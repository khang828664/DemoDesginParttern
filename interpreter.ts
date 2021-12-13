export interface  Expression {
    interpret (interpretEngineContext :InterpretEngineContext) : number 
    
}
export class InterpretEngineContext{
    add (input: string) :number {
        let tokens : string [] = this.interpret(input)
        let number1 = parseInt(tokens[0])
        let number2 = parseInt(tokens[2])
        return number1 + number2
    }
    subtract (input: string) :number {
        let tokens : string [] = this.interpret(input)
        let number1 = parseInt(tokens[0])
        let number2 = parseInt(tokens[2])
        return number1 - number2
    }
    interpret (input : string) : string[]  {
        let str = input.replace("[^0-9]"," ");
        str = str.replace("( )+"," ").trim();
        return str.split(" ");
    }
}
export class AddExpression implements Expression {
    private expression:string
    constructor(expression:string){
        this.expression = expression
    }
    interpret(interpretEngineContext: InterpretEngineContext): number {
        return interpretEngineContext.add(this.expression)
    }
}
export  class SubtractExpression implements Expression {
    private expression:string
    constructor (expression :string ) {
        this.expression = expression
    }
    interpret(interpretEngineContext: InterpretEngineContext): number {
        return interpretEngineContext.subtract(this.expression)
    }
}
