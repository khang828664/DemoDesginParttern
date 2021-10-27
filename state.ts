import { stat } from "fs";

/**
 * creat State for playerMedia Object
 * @param {Player} player 
 */
export interface State {
    player:Player
    nameState: String
    setPlayer(player:Player):void
     clickLock(): void
     clickPlay(): void
     clickNext(): void
     clickPrevious(): void
     clickRewind(): void
}
/**
 * define some state of PlayerMedia
 */
export class ReadyState implements State {
    nameState: String = 'Ready_State'
    player: Player;
    setPlayer(player: Player): void {
        this.player = player
    }
    clickLock() {
        this.player.changeState(new LockedState())
    }
    clickPlay(): void {
        
        let state =  new PlayingState()
        state.setPlayer(this.player)
        this.player.setPlayer(true)
        this.player.changeState(state)
        this.player.startPlayback()
    }
    clickNext(): void {
        this.player.nextSong();
    }
    clickPrevious(): void {
        this.player.previousSong()
    }
    clickRewind(): void {
        this.clickPrevious();
    }


}
export class PlayingState implements State {
    nameState: String = 'Ready_State'
    player: Player;
    setPlayer(player: Player): void {
        this.player = player
    }
    clickLock(): void {
        let state  = new  LockedState()
        state.setPlayer(this.player)
        this.player.changeState(state)
    }
    clickNext(): void {
        this.player.nextSong();
    }
    clickPrevious(): void {
        this.player.previousSong();
    }
    clickRewind(): void {
        /// Do nothing here
        throw new Error("Method not implemented.");
    }
    clickPlay() {
        this.player.stopPlayback()
        let state =  new ReadyState()
        state.setPlayer(this.player)
        this.player.setPlayer(false)
        this.player.changeState(state)
    }
}
export class LockedState implements State {
    player: Player;
    nameState: String = 'Locked_State'
    setPlayer(player: Player): void {
       this.player = player
    }
    clickPlay(): void {
        ///do not thing
    }
    clickNext(): void {
        ///do not thing
    }
    clickPrevious(): void {
        ///do not thing
    }
    clickRewind(): void {
        ///do not thing
    }
    clickLock() {
        if (this.player.isPlay) {
            let state =  new  PlayingState()
            state.setPlayer(this.player)
            this.player.changeState(new PlayingState())
        } else {
            this.player.changeState(new ReadyState())
        }
    }
}
/**
 * Create Class MediaPlayer 
 * Context
 */
export class Player {
    state: State;
    currentSong: string;
    isPlay: boolean;
    constructor (state:State) {
        this.state = state;
        this.state.setPlayer(this)
    }

    // request handler method 
    changeState(state: State) {
        this.state = state;
        console.log(`Name state change ${this.state.nameState}`)
    }
    clickClock() {
        this.state.clickLock();
    }
    clickPlay() {
        this.state.clickPlay();
    }
    clickNext() {
        this.state.clickNext();
    }
    clickPrevious() {
        this.state.clickPrevious()
    }
    clickRewind() {
        this.state.clickRewind();
    }
    ///  
    /// service method of player
    startPlayback() {
        console.log("Loading file and Start ")
        setTimeout(() => {
            console.log("Playing media")
        }, 1000);
    }
    stopPlayback() {
        console.log("Stopping time ")
        setTimeout(() => {
            console.log("Stop media")
        }, 1000);
    }
    nextSong() {
        console.log('Changing next Song .... ')
        const timeOut = setTimeout(() => {
            console.log("Next Song ||>")
        }, 1000);
        clearTimeout(timeOut);
    }
    previousSong() {
        console.log('Changing previous  Song .... ')
        const timeOut = setTimeout(() => {
            console.log("Previous Song <||")
        }, 1000);
        clearTimeout(timeOut);
    }
    setPlayer(param: boolean) {
        this.isPlay = param
    }
}



