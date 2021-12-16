export interface Subject {
    attach(observer: Observer): void
    detach(observer: Observer): void
    notify(): void
}
export class ConcreteSubject implements Subject {
    state: number
    observers: Observer[] = []

    attach(observer: Observer): void {

        const isExist = this.observers.includes(observer)
        if (isExist) {
            return console.log(`Subject: Observer has been attach already`)
        }
        console.log('Subject: Attach an Observer')
        this.observers.push(observer)
    }
    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if (observerIndex == -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log(`Subject: Detach an observer`);
    }
    notify(): void {
        console.log(`Subject : Notify in Observer...`)
        for (let observer of this.observers) {
            observer.update(this);
        }
    }
    someBusinessLogic(): void {
        console.log(`\nSubject: I\'m doing something important.`);
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log(`Subject : My state has just changed to :  ${this.state}`);
        this.notify()
    }

}
export interface Observer {
    update(subject: Subject): void
}
export class ConcreteObA implements Observer {
    update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log(`ConcreteObserverA: Reacted to the event.`);
        }
    }

}
export class ConcreteObB implements Observer {
    update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && (subject.state < 3 || subject.state > 2)) {
            console.log(`ConcreteObserverB: Reacted to the event.`);
        }
    }
}