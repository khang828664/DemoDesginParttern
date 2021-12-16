

export interface ServiceInterface {
    operation(): void
    operation_1(): void
    operation_3(): void
}
export class CProxy implements ServiceInterface {

    isAccess : boolean;
    realService: Service;
    constructor(service: Service) {
        this.realService = service;
    }
    operation(): void {
        if (this.isAccess) {
            this.realService.operation();
        }
    }
    operation_1(): void {
        if (this.isAccess)
            this.realService.operation_1();
    }
    operation_2() {
        if (this.isAccess) { this.realService.operation_2() }
        else {
            throw new Error("Access Deny");
        }
    }
    operation_3() {
        if (this.isAccess)
            this.realService.operation_3();
    }
    checkAccess(checked: boolean): void {
        this.isAccess =checked;
    }
}
export class Service implements ServiceInterface {
    operation(): void {
        console.log("operation_0")
    }
    operation_1(): void {
        console.log("operation_1")
    }
    operation_2(): void {
        console.log("operation_2")
    }
    operation_3(): void {
        console.log("operation_3")
    }
}
