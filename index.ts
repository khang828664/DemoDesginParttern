import *as http from 'http';
import *as readline from 'readline'
import ClientCodeSingleton from './singleton'
import Client, { Factory, Factory_1 } from './factory';
import clientCode, { ConcreteCreator1, ConcreteCreator2 } from './factory_method'
import { WOODEN_GOODS, STEEL_GOODS, HOUSE_1, HOUSE_2 } from "./const"
import { Director, house_1, house_2 } from './builder'
import { Target, Adapter, service } from "./adapter"
import { PrototypeRes, Trooper, TrooperPrototype, CommandoTrooper } from './prototype'
//import { Dot, Circle, CompoundGraphic, Graphic } from './composite'
import { TV, Radio, Remote, specialRemote } from './bridge'
import { CheeseDecorator, IPizza, TomatoPizza, ChickenPizza, PizzaDecorator, PepperDecorator } from './decorator'
import { VideoConverter, MPEG4CompressionCodec, OggCompressionCodec, AudioMixer, VideoFile } from './facade';
import { TankFactory, Tank, type, size, tankSkill, TankSkill, ITank } from './flyweight';
import { PlayingState, ReadyState, Player, LockedState } from './state';
import { Context, ConcreteStrategyA, ConcreteStrategyB } from './strategy'
import { randomInt } from 'crypto';
import *as lodash from 'lodash'
import { CProxy, Service } from './proxy';
import ClientTemPlate, { AbstractClass, ConcreteClass_1, ConcreteClass_2  } from './template'
import {Command,Invoke, Receiver, ComplexCommand, SimpleCommand} from './command'
import {Circle,Rectangle,Dot,XMLExportVisiter, HTMLexportVisiter } from './visitor'
import {Component1, Component2 , ConcreteMediator }from './mediator'
import {Originator, Caretaker} from './memento'
import {WordsCollection} from './iterator'
import { AddExpression, Expression, InterpretEngineContext, SubtractExpression } from './interpreter';
import {SquirrelHandler, DogHandler , MonkeyHandler, Handler} from './chain'
import {Subject, ConcreteObA, ConcreteObB, Observer,ConcreteSubject} from './observer'

/**
 * Singleton
 */
ClientCodeSingleton()
/**
 * Singleton
 */
/**
 * Abstract Factory
 */
console.log("Create Complex Product include kind product A B")
Client(new Factory)
console.log("Create Complex Product_1 include kind product A-1 B-1")
Client(new Factory_1)
/**
 * Abstract Factory
 */

/**
 * Factory method
 */
 console.log('App: Launched with the ConcreteCreator1.');
 clientCode(new ConcreteCreator1());
 console.log('');
 
 console.log('App: Launched with the ConcreteCreator2.');
 clientCode(new ConcreteCreator2());
/**
 * Factory method
 */
/// Builder
/// return result house_1  after build
// const builderHouse_1 = new house_1()
// const builderHouse_2 = new house_2()
// const director: Director = new Director()
// director.setBUilder(builderHouse_1)
// director.makeType(HOUSE_1)
// let a = builderHouse_1.getResult()
// console.log(a.toString())
///
//  return result house_2  after build
// director.setBUilder(builderHouse_2)
// director.makeType(HOUSE_2)
// let b = builderHouse_2.getResult()
// console.log(b.toString())

// Adapter 
///Client
// const request: Target = new Adapter(new service)
// request.request("hello")
//
// prototype client
/// 
/// create old 
// const prototypeRes = new PrototypeRes()
// const trooper: TrooperPrototype = new Trooper()
// trooper.id = "0"
// trooper.rank = "1"
// trooper.color = "#ffff"
// let cloneObject = Object.create(trooper)
// cloneObject.rank = "red"
// console.log(cloneObject.rank)
// console.log(trooper.getInfo())
// /// res prototype
// prototypeRes.addItem(trooper)
// const commandoTrooper: TrooperPrototype = new CommandoTrooper()
// commandoTrooper.id = "1"
// commandoTrooper.rank = "2"
// commandoTrooper.color = "#FF0000"
// prototypeRes.addItem(commandoTrooper)
// ///
// /// clone object trooper by color 
// const cloneTrooper: TrooperPrototype = prototypeRes.getByColor("#ffff")
// /// clone  object commandoTrooper by color
// const cloneCommandoTrooper: TrooperPrototype = prototypeRes.getByColor("#FF0000")

// console.log(cloneCommandoTrooper.getInfo())
// console.log(cloneTrooper.getInfo())

///
///
// composite
// const graphic = new CompoundGraphic()
// graphic.add(new Dot(1, 2))
// graphic.add(new Circle(5, 3, 10))
// graphic.draw()
// graphic.move(10, 10)
// console.log("After move: ")
// graphic.draw()
// const groupSelect = (component: Graphic[]) => {
//     let group = new CompoundGraphic()
//     for (let items of component) {
//         group.add(items)
//         graphic.remove(items)
//     }
//     graphic.add(group)
//     graphic.draw()
// }
////// bridge ////
// const tv = new TV();
// const radio = new Radio();
// tv.getInfo();
// const remote = new Remote(tv);
// const remoteRadio = new Remote(radio);
// remoteRadio.volumeDown();
// remoteRadio.togglePower();
// remote.togglePower();
// remote.volumeDown();
// tv.getInfo();
// remote.togglePower();
// remote.volumeDown();
// tv.getInfo();
/// decorate ///
// const Tomato: IPizza = new TomatoPizza();
// const Chicken: IPizza = new ChickenPizza();
// default pizza 
// console.log(Tomato.doPizza());
// console.log(Chicken.doPizza());
///---
// const cheeseDecorator: CheeseDecorator = new CheeseDecorator(Tomato);
// const cheeseDecorator_1 = cheeseDecorator.setPizza(Chicken);
// console.log(cheeseDecorator.doPizza());
// const pepperDecorator: PepperDecorator = new PepperDecorator(Tomato);
// console.log(pepperDecorator.doPizza());
///flyWeight pattern////   
//List tank
// const tanks: ITank[] = []
// const createTank = (numberOfTank, { ...props }) => {
//     for (let index = 0; index < numberOfTank; index++) {
//         let skillTank: TankSkill
//         if (randomInt(1) == 1) {
//             skillTank = new TankSkill(tankSkill.BREAK_AMOR)
//         } else {
//             skillTank = new TankSkill(tankSkill.EXPLORE_BULLET)
//         }
//         let tank = TankFactory.createTank(props.type, props)
//         tank.readState(skillTank)
//         tanks.push(tank)
//     }
// }
// const mediumTank = {
//     color: "#0010",
//     texture: "random",
//     type: type.MEDIUM,
//     size: size.MEDIUM,
//     name: "Tiger II"
// }
// const lightTank = {
//     color: "#0010",
//     texture: "random",
//     type: type.LIGHT,
//     size: size.SMALL,
//     name: "leopard"
// }
// const HeavyTank = {
//     color: "#0010",
//     texture: "random",
//     type: type.HEAVY,
//     size: size.BIG,
//     name: "Maus"
// }
// console.time("createTank")
// createTank(3, mediumTank)
// createTank(5, lightTank)
// createTank(8, HeavyTank)
// ////with out pattern

// TankFactory.countNumberOfTankCreate()
// console.timeEnd("createTank")
// console.log(`Number Object Tank create ${TankFactory.numberOfTypeCreate}`)



// console.time("createMTank")
// const createMTank = () => {
//     let arrayTank: ITank[] = []
//     for (let index = 0; index < 20; index++) {
//         arrayTank[index] = new Tank(lightTank)
//         arrayTank[index].readState(null)
//     }
// }
// console.timeEnd("createMTank")
/// facade /////
// const videoFile = new VideoFile();
// const MP4 = new MPEG4CompressionCodec();
// const Ogg = new OggCompressionCodec()
// const Audio = new AudioMixer();
// /**
//  * Wrap complex Operation to load 1 fine to 1 method 
//  * 
//  */
// const convert = new VideoConverter(videoFile, MP4, Ogg, Audio);
// convert.convert("funny_cat", "MP4", "sound_track")
/**
 * State 
 */
// const initialState  = new  ReadyState()
// const mediaPlayer = new Player(initialState)
// mediaPlayer.clickPlay()
/**
 * state
 */
/**
 * strategy 
 */
// const number: number[] = [1, 3, 2, 4, 7, 6, 5]
// const context = new Context(new ConcreteStrategyA())
// console.log('Client: Strategy is set to normal sorting.');
// context.doSomeBusinessLogic(number);
// console.log('');
// console.log('Client: Strategy is set to reverse sorting.');
// context.setStrategy(new ConcreteStrategyB())
// context.doSomeBusinessLogic(number)
/**
 * strategy 
 */
/**
 * Proxy
 */
// const clientUsing = new CProxy(new Service())
// clientUsing.checkAccess(true);
// clientUsing.operation();
// clientUsing.operation_1();
// clientUsing.operation_3();
// /// set deny for service 
// clientUsing.checkAccess(false);
// try {
//     clientUsing.operation_2();
// } catch (e) {
//     console.log(e.toString());
// }
/**
 * Proxy
 */
/**
 * template
 */
    console.log("<<<<<<<-----Do ConcreteClass class _1------>>>>>")
    ClientTemPlate(new ConcreteClass_1)
    console.log("<<<<<<<-----Do ConcreteClass class _2------>>>>>")
    ClientTemPlate(new ConcreteClass_2)
/**
 * template
 */

/**
 * Command
 */
    // const invoker = new Invoke();
    // invoker.setOnStart(new SimpleCommand('Say hi'))
    // const receiver = new Receiver ();
    // invoker.setOnFinish(new ComplexCommand(receiver, 'send email', 'Save report'))
    // invoker.doSomethingImportant();
/**
 * Command
 */
/**
 * visitor
 */
    // const circle = new Circle({x:10,y:10,radius:10})
    // const rectangle= new Rectangle({x:5,y:5,angle:10})  
    // const dot = new  Dot ({x:10,y:10})
    // const xmlVisitor = new XMLExportVisiter()
    // const htmlVisitor = new  HTMLexportVisiter () 
    //     dot.accept(xmlVisitor);
    //     dot.accept(htmlVisitor);
/**
 * visitor
 */
/** 
 * mediator
 */
// const c1  = new Component1()
// const c2  = new Component2()
// const mediator =  new ConcreteMediator(c1, c2)

// console.log('client trigger operator A')
// c1.doA()
// console.log('')
// console.log('client trigger operator D.')
// c2.doD()
/**
 * mediator
 */
/**
 * Memento
//  */
// const originator = new Originator('Super-duper-super-puper-super.')
// const caretaker =  new Caretaker (originator)
// caretaker.backup();
// originator.doSomething();

// caretaker.backup();
// originator.doSomething();

// caretaker.backup();
// originator.doSomething();

// console.log('');
// caretaker.showHistory();

// console.log('\nClient: Now, let\'s rollback!\n');
// caretaker.undo();

// console.log('\nClient: Once more!\n');
// caretaker.undo();
/**
 * Memento
 */
/**
 * Interpret
 */

//  const interpret =  (input:string)  => {
//     let exp:Expression = null;
//     if(input.includes("cong")){
//         exp = new AddExpression(input)
//     }else { 
//         if (input.includes("tru"))
//         exp =  new SubtractExpression(input)
//         else  {
//         throw new Error("unSupport");
        
//     }
// }
//     return exp.interpret(new InterpretEngineContext())
// }  
// console.log(`20 cong 8 = ${interpret("20 cong 8")}`)
// console.log(`20 cong 8 = ${interpret("20 tru 8")}`)

/**
 * Interpret
 */

/**
 * chain
 */
//  function clientCode(handler: Handler) {
//     const foods = ['Nut', 'Banana', 'Cup of coffee'];

//     for (const food of foods) {
//         console.log(`Client: Who wants a ${food}?`);

//         const result = handler.handle(food);
//         if (result) {
//             console.log(`  ${result}`);
//         } else {
//             console.log(`  ${food} was left untouched.`);
//         }
//     }
// }

//  const monkey = new MonkeyHandler();
//  const squirrel = new SquirrelHandler();
//  const dog = new DogHandler();
 
//  monkey.setNext(squirrel).setNext(dog);
 
//  console.log('Chain: Monkey > Squirrel > Dog\n');
//  clientCode(monkey);
//  console.log('');
 
//  console.log('Subchain: Squirrel > Dog\n');
//  clientCode(squirrel);
/**
 * chain
 */
/** Iterator */
// const collection = new WordsCollection();
// collection.addItem("First")
// collection.addItem("Second")
// collection.addItem("Third")
// collection.addItem("Four")

// const iterator= collection.getIterator();
// console.log(" Straight traversal")
// while (iterator.valid()) {
//     console.log(iterator.next());
// }
// console.log('');
// console.log('Reverse traversal');
// const reverseIterator = collection.getReverseIterator();
// while(reverseIterator.valid()) {
//     console.log(reverseIterator.next())
// }
/**Iterator */
/**
 * Observer
 */
// const subject = new ConcreteSubject ();
// const observer_1:Observer = new ConcreteObA ();
// subject.attach(observer_1)
// const observer_2:Observer = new ConcreteObB ();
// subject.attach(observer_2)

// subject.someBusinessLogic();
// subject.someBusinessLogic();
// subject.detach(observer_2);
// subject.someBusinessLogic()
/**
 * 
 * Observer
 */