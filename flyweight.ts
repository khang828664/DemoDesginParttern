import { randomInt, randomUUID } from "crypto";

///  type tank define by armor  ///
export enum type { LIGHT = 'LIGHT', MEDIUM = 'MEDIUM', HEAVY = 'HEAVY' }
export enum size { SMALL = 'SMALL', MEDIUM = 'MEDIUM', BIG = 'BIG' }
export enum tankSkill {
    BREAK_AMOR = "BREAK_AMOR",
    EXPLORE_BULLET = "EXPLORE_BULLET"
}
/**
 * OutSite State 
 */
export class TankSkill {
    nameSkill: string
    constructor(nameSkill: string) {
        this.nameSkill = nameSkill;
    }
    getNameSkill = () => this.nameSkill
    setNameSkill = (nameSkill: string) => this.nameSkill = nameSkill
}
export interface ITank {
    color: string,
    name: string,
    texture: string,
    id: string,
    type: string,
    size: string,
    readState(TankSkill: TankSkill): void,
}
/**
 * ConcreteFlyweight
 */

export class Tank implements ITank {
    constructor({ ...props }) {
        this.color = props.color
        this.id = randomUUID()
        this.name = props.name
        this.size = props.size
        this.texture = props.texture
        this.type = props.type
    }
    color: string;
    texture: string;
    id: string;
    type: string;
    size: string;
    name: string;
    readState(tankSkill): void {
        console.log(`${this.color}\n${this.id}\n${this.name}\n${this.size}${this.texture}\n${this.type}\n${tankSkill.getNameSkill()}
             `);
    }
}
/**
 * UnshareFlyweight
 */
class protoTank implements ITank {
    constructor({ ...props }) {
        this.color = props.color
        this.id = randomUUID()
        this.name = props.names
        this.size = props.size
        this.texture = props.texture
        this.type = props.type
        this.uniqueSkill = props.uniqueSkill
    }
    uniqueSkill: string // not share state
    color: string;
    name: string;
    texture: string;
    id: string;
    type: string;
    size: string;
    readState(tankSkill: TankSkill): void {
        console.log(
            `${this.color}
                ${this.id}
                ${this.name}
                ${this.size}
                ${this.texture}
                ${this.type}
                ${tankSkill.getNameSkill()}
                 `);
    }
}
/** 
 * FlyWeight factory
 */
interface MapTankFactory {
    type: string,
    tank: Tank
}
export class TankFactory {
    static numberOfTypeCreate: number = 0;
    constructor() {
    }
    numberOfTypeCreate: number
    static tanks: MapTankFactory[] = []
    static createTank(typeTank: string, { ...props }) {
        let mapTank: MapTankFactory = this.tanks.find((value: MapTankFactory) => value.type === typeTank)
        let tank: ITank
        if (!mapTank) {
            tank = new Tank(props)
            this.tanks.push({ type: typeTank, tank: tank });
            return tank
        } else return mapTank.tank
    }
    static countNumberOfTankCreate = (): void => {
        for (let element in TankFactory.tanks) {
            TankFactory.numberOfTypeCreate++
        }
    }
}
