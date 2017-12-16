import {Processable} from "./Processable";
import {FnDelegate} from "../util/FnDelegate";

export class IntervalCheck extends Processable{
  private interval:number;
  private intervalID:number;
  private delegate:FnDelegate;

  constructor(interval:number, fn:Function, context:any, ...args:any[]){
    super();
    this.interval = interval;
    this.delegate = new FnDelegate(fn,context, ...args);
  }

  execute(){
    this.intervalID = window.setInterval(() => {
      this.check();
    }, this.interval);
  }

  destroy(){
    if(this.intervalID){
      clearInterval(this.intervalID);
      this.delegate.destroy();
      this.delegate = null;
    }
  }

  private check(){
    let result = this.delegate.execute();
    if(result === true){
      clearInterval(this.intervalID);
      super.complete();
    }
  }
}
