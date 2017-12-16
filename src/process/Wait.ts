import {Processable} from "./Processable";
import {ProcessEvent} from "./ProcessEvent"
import {FnDelegate} from "../util/FnDelegate";

export class Wait extends Processable{
  private timerID:number;
  private delegate:FnDelegate;

  constructor(private ms:number, fn?:Function, context?:any, ...args:any[]){
    super();
    if(fn){
      this.delegate = new FnDelegate(fn, context, ...args);
      this.bind(ProcessEvent.ON_WAIT, this.delegate);
    }
  }

  execute(){
    let that = this;
    this.timerID = setTimeout(function(){
      that.onCompleteTimer();
    }, this.ms);
  }

  destroy(){
    if(this.timerID) {
      clearTimeout(this.timerID);
      if(this.delegate){
        this.delegate.destroy();
        this.delegate = null;
      }
    }
  }

  private onCompleteTimer(){
    this.dispatch(ProcessEvent.ON_WAIT);
    super.complete();
  }
}
