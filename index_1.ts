import { ConcreteCEO, ConcreteVDrMarketing ,ConcreteVDrSanXuat, AbstractEmployee } from './demo'

const ceo: AbstractEmployee = new ConcreteCEO()
const marketing :  AbstractEmployee = new ConcreteVDrMarketing ()
const sanxuat : AbstractEmployee = new ConcreteVDrSanXuat ()

console.log('Input infor CEO and position')
ceo._inputInfo("CEO","A")

// salary using usd 
ceo._setSalary(20000)
ceo._setManage("marketing")
ceo._setManage("sanxuat")
ceo._setManage("1")
ceo._getSalary()

console.log('Infor CEO and position')
ceo._getInfor()