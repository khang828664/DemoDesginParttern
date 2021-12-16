export abstract class AbstractClass {
    public templateMethod() : void
    {
        console.log("Template method 2")
        this.baseOperation1();
        this.baseOperation2();
        this.requireOperation1();
        this.requireOperation2();
        this.hook_1();
        this.hook_2();
    }
    public templateMethod_2(): void 
    {
        console.log("Template method 2")
        this.baseOperation2()
        this.requireOperation2()
        this.hook_1()
        
    }
protected  baseOperation1():void {
    console.log("baseOperation1 doing_1")
}
protected  baseOperation2():void {
    console.log("baseOperation2 doing_2")
}
protected abstract  requireOperation1 () :void
protected abstract  requireOperation2 () :void
hook_1 ():void {} 
hook_2 ():void {}
}
export class ConcreteClass_1 extends AbstractClass {
    protected requireOperation2(): void {
        console.log("require Operation_2 of ConcreteClass_1")
    }
    protected requireOperation1(): void {
        console.log("require Operation_1 of ConcreteClass_1")
    }
    hook_2() {
        console.log("Concrete class 1  doing hook 2")
    }
}
export class ConcreteClass_2 extends AbstractClass {
    protected requireOperation1(): void {
        console.log("require Operation_2 of ConcreteClass_2")
        
    }
    protected requireOperation2(): void {
        console.log("require Operation_2 of ConcreteClass_2")
        
    }
   hook_1() {
        console.log("Concrete class 2 doing hook 1 ")
    }
}
export default function Client (f:AbstractClass) {
    f.templateMethod()
    f.templateMethod_2()
} 

