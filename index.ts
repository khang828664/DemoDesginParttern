import *as http from 'http';
import *as readline from 'readline'
import factory, { steelGoods, woodenGoods } from './factory';
import { WOODEN_GOODS, STEEL_GOODS, HOUSE_1, HOUSE_2 } from "./const"
import { Director, house_1, house_2 } from './builder'
import { Target, Adapter, service } from "./adapter"
/// Abstact factory 
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
// const builderHouse_1 = new house_1()
// const builderHouse_2 = new house_2()
// const director: Director = new Director()
// director.setBUilder(builderHouse_1)
// director.makeType(HOUSE_1)
// let a = builderHouse_1.getResult()
// console.log(a.toString())
// director.setBUilder(builderHouse_2)
// director.makeType(HOUSE_2)
// let b = builderHouse_2.getResult()
// console.log(b.toString())
/// return result house 1  after build
//  return result house 2  after build

// Adapter 
///Client
const request: Target = new Adapter(new service)
request.request("hello")
