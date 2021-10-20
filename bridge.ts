import { parentPort } from "worker_threads";

interface Device {
    isEnable(): boolean,
    enable(): void,
    disable(): void,
    getVolume(): number,
    setVolume(value: number): void,
    getChanel(): void,

}
class TV implements Device {
    constructor() {
        this.turnOn = false;
        this.volume = 10;
    }
    turnOn: boolean = false;
    volume: number = 0;
    isEnable(): boolean {
        return this.turnOn;
    }
    enable(): void {
        this.turnOn = true;
    }
    disable(): void {
        this.turnOn = false;
    }
    getVolume = () => this.volume;
    setVolume(value: number): void {
        this.volume = value;
    }
    getChanel(): void {
    }
    getInfo() {
        console.log(this.volume.toString());
        console.log(this.turnOn.toString());
    }
}
class Radio implements Device {

    turnOn: boolean;
    volume: number;
    constructor() {
        this.turnOn = false;
    }
    isEnable = () => this.turnOn;

    disable(): void {
        this.turnOn = false;
    }
    enable(): void {
        this.turnOn = true;
    }
    getVolume = () => this.volume;
    setVolume(value: number): void {
        this.volume = value;
    }
    getChanel(): void {

    }

}
class Remote {
    device: Device;
    constructor(device: Device) {
        this.device = device
    }
   togglePower(): void {
        if (this.device.isEnable()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }
    volumeUp(): void {
        this.device.setVolume(this.device.getVolume() + 1);
    }
    volumeDown(): void {
        this.device.setVolume(this.device.getVolume() - 1);
    }

}
class specialRemote extends Remote {
    constructor(device: Device) {
        super(device);
    }
    mute(): void {
        this.device.setVolume(0);
    }
}
export { Device, TV, Radio, Remote, specialRemote }