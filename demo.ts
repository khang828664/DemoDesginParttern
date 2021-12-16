export abstract class AbstractEmployee {
    salary:number ;
    numberOfManage:number;
    positionName:string;
    nameEmployee: string;
    nameOfPositionManage: string [] = []
    public _inputInfo(namePosition:string, name:string): void 
    {   
        this.InputName(name);
        this.InputPosition();
        this.setPosition(namePosition)
    }
    public _getSalary():void {
        this.getSalary();
    }
    public _setSalary(salary: number): void {
        this.setSalary(salary)
    }
    public _setManage(name:string) {
        this.SetManage(name)
    }
    public _getInfor() {
        this.getName()
        this.getSalary()
        this.GetPosition()
        this.GetManage()
    }
    GetManage() {
        for(let element of this.nameOfPositionManage){
            console.log(element)
        }
    }
    setPosition (name:string) {
        this.positionName = name
    }
    getName() {
        console.log(`name of employee ${this.nameEmployee}`)
    }
    InputName(name:string) {
        console.log("Input Name here")
        this.nameEmployee = name   
    }
    getSalary() {
        console.log(`salary : ${this.salary}`)
    }
    InputPosition() {
        console.log("Input Position here")
    }
protected abstract   GetPosition() :void
protected abstract   SetManage ( name :string):void 
protected abstract   setSalary( salary : number): void
}
export class ConcreteCEO extends AbstractEmployee {
    protected setSalary(salary: number) {
        this.salary =  salary
    }
    protected GetPosition() {
        console.log(`position current ${this.positionName}`)
    }
    protected SetManage(name: string) {
        if(this.nameOfPositionManage.length < 2){
            this.nameOfPositionManage.push(name)
        }
    }
}
export class ConcreteVDrMarketing extends AbstractEmployee {
    protected setSalary(salary: number) {
        this.salary = salary 
    }
    protected GetPosition() {
        console.log(`position current ${this.positionName}`)
    }
    protected SetManage( name: string) {
        if(this.nameOfPositionManage.length < 2){
            this.nameOfPositionManage.push(name)
        }
    }
}
export class ConcreteVDrSanXuat extends AbstractEmployee {
    protected setSalary(salary: number) {
        this.salary = salary
    }
    protected GetPosition() {
        console.log(`current position is:${this.positionName}`)
    }
    protected SetManage( name: string) {
        if(this.nameOfPositionManage.length < 2){
            this.nameOfPositionManage.push(name)
        }
    }

}

