export interface Command {
    execute() :void;
    
}
export class SimpleCommand implements  Command{
    private payload : string ;
    constructor (payload:string) {
        this.payload = payload
    }
    execute(): void {
        console.log(`Simple command: This doing simple command ${this.payload}`)
    }

}
export class Receiver {
    public doSomething (a :String) : void {
        console.log(`Receiver : Working on ${a}`)
    }
    public doSomethingElse (b: String) : void {
        console.log(`Receiver : Working on ${b}`)

    }
}

export class ComplexCommand  implements Command {
    private receiver: Receiver
    private a :String
    private b :String
    constructor (receiver: Receiver, a:String , b: String ) {
        this.receiver = receiver; 
        this.a  = a;
        this.b  = b;
    }
    execute(): void {
        console.log(`CompleteCommand:Complex stuff should be done by a receiver Object`) 
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b)
    }
}
export class Invoke {
    private onStart: Command;
    private onFinish: Command;
    
    public setOnStart (command : Command) : void {
        this.onStart = command;
    }
    public setOnFinish (command : Command) : void {
        this.onFinish = command
    }
    public  doSomethingImportant () : void {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        console.log('Invoker: ...doing something really important...');

        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }
    private isCommand (object:any): object is Command {
        return object.execute !== undefined;
    }

}