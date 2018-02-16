import {Processable} from "./Processable";
import {ProcessEvent} from "./ProcessEvent";
import {FnDelegate} from "../util/FnDelegate";


export class Sequence extends Processable {

  private processList: Processable[];
  private currentProcess: Processable;
  private isRunning: boolean = false;

  constructor(arr: Processable[] = []) {
    super();
    this.processList = arr;
  }

  execute(): void {
    this.isRunning = true;
    this.executeNextProcess();
  }

  destroy(): void {
    if(this.currentProcess) {
      this.currentProcess.unbind(ProcessEvent.ON_COMPLETE, this.onCompleteSingleProcess);
      this.currentProcess.destroy();
      this.currentProcess = null;
    }
    for(let i = 0, l = this.processList.length; i < l; i++) {
      this.processList[i].destroy();
    }
    this.processList.length = 0;
  }

  complete(): void {
    this.isRunning = false;
    super.complete();
  }

  add(process: Processable): void {
    this.processList.push(process);
  }

  insert(process: Processable): void {
    this.processList.unshift(process);
  }

  getIsRunning(): boolean {
    return this.isRunning;
  }

  private onCompleteSingleProcess() {
    //console.log('oncomplete SQ single');
    this.currentProcess.unbind(ProcessEvent.ON_COMPLETE, this.onCompleteSingleProcess);
    this.currentProcess.destroy();
    this.executeNextProcess();
  }

  private executeNextProcess() {
    //var that = this;
    if(this.processList.length) {
      this.currentProcess = this.processList.shift();
      this.currentProcess.bind(ProcessEvent.ON_COMPLETE, new FnDelegate(this.onCompleteSingleProcess, this));
      this.currentProcess.execute();
    } else {
      this.complete();
    }
  }
}
