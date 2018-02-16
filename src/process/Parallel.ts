import {Processable} from "./Processable";
import {ProcessEvent} from "./ProcessEvent";
import {FnDelegate} from "../util/FnDelegate";

export class Parallel extends Processable{

  private processList:Processable[];
  private isRunning:boolean = false;
  private completedNum:number = 0;

  constructor(arr:Processable[] = []){
    super();
    this.processList = arr;
  }

  execute():void{
    this.completedNum = 0;
    this.isRunning = true;

    let i:number = 0;
    let l:number = this.processList.length;
    let process:Processable;
    for(; i < l; i++){
      process = this.processList[i];
      process.bind(ProcessEvent.ON_COMPLETE, new FnDelegate(this.onCompleteSingleProcess, this));
      process.execute();
    }
  }

  complete():void{
    this.processList.forEach((elm) => {
      elm.destroy();
    });
    this.isRunning = false;
    super.complete();
  }

  destroy():void{

  }
  add(process:Processable):void{
    this.processList.push(process);
  }

  insert(process:Processable):void{
    this.processList.unshift(process);
  }

  getIsRunning():boolean{
    return this.isRunning;
  }

  private onCompleteSingleProcess(){
    this.completedNum++;
    if(this.completedNum >= this.processList.length){
      this.complete();
    }
  }
}
