export interface Strategy {
    doAlgorithm(data: string[]): string[];
}
export class ConcreteStrategyA implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}
export class ConcreteStrategyB implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }

}
export class Context {
    private strategy: Strategy
    constructor(strategy: Strategy) {
        this.strategy = strategy
    }
    setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }
    public doSomeBusinessLogic(array: any[]): void {
        console.log('Context : sorting data using the strategy (not sure how it\'ll do it )');
        const result: any[] = this.strategy.doAlgorithm(array)
        console.log(result.join(','))
    }
}