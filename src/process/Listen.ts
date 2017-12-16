import {Processable} from "./Processable";
import {ProcessEvent} from "./ProcessEvent";
import {Dispatchable} from "../event/Dispatchable";
import {FnDelegate} from "../util/FnDelegate";

export class Listen extends Processable{
  private delegate:FnDelegate;

  constructor(private eventTarget:Dispatchable | HTMLElement, private eventType:string, fn?:Function, context?:any, ...args:any[]){
    super();
    if(fn){
      this.delegate = new FnDelegate(fn, context, ...args);
      this.bind(ProcessEvent.ON_LISTEN, this.delegate);
    }
  }

  execute(){
    if(this.eventTarget instanceof Dispatchable){
      this.eventTarget.bind(this.eventType, this.onEvent, this);
    }else{
      this.eventTarget.addEventListener(this.eventType, () => {
        this.onEvent();
      });
    }
  }

  private onEvent(){
    this.dispatch(ProcessEvent.ON_LISTEN);
    super.complete();
  }
}
