import *as http from 'http';
import *as readline from 'readline'
import factory, { steelGoods, woodenGoods } from './factory';
import { WOODEN_GOODS, STEEL_GOODS, HOUSE_1, HOUSE_2 } from "./const"
import { Director, house_1, house_2 } from './builder'
import { Target, Adapter, service } from "./adapter"
import { PrototypeRes, Trooper, TrooperPrototype, CommandoTrooper } from './prototype'
///Abstact factory 
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// console.log("1:for steel Goods ")
// console.log("2:for wood Goods ")
// const productSteel: steelGoods = factory.createSteel()
// const productWooden: woodenGoods = factory.createWooden()

// rl.question("what kine of product u want", (ans) => {
//     switch (ans) {
//         case "1":
//             productSteel.createGood()
//             break;
//         case "2":
//             productWooden.createGood()
//         default:
//             break;
//     }
// })
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
const prototypeRes = new PrototypeRes()
const trooper: TrooperPrototype = new Trooper()
trooper.id = "0"
trooper.rank = "1"
trooper.color = "#ffff"
let cloneObject = Object.create(trooper)
cloneObject.rank = "red"
console.log(cloneObject.rank)
console.log(trooper.getInfo())
/// res prototype
prototypeRes.addItem(trooper)
const commandoTrooper: TrooperPrototype = new CommandoTrooper()
commandoTrooper.id = "1"
commandoTrooper.rank = "2"
commandoTrooper.color = "#FF0000"
prototypeRes.addItem(commandoTrooper)
///
/// clone object trooper by color 
const cloneTrooper: TrooperPrototype = prototypeRes.getByColor("#ffff")
/// clone  object commandoTrooper by color
const cloneCommandoTrooper: TrooperPrototype = prototypeRes.getByColor("#FF0000")

console.log(cloneCommandoTrooper.getInfo())
console.log(cloneTrooper.getInfo())

///
///







