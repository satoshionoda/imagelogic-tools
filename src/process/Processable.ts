import {Dispatchable} from "../event/Dispatchable";
import {ProcessEvent} from "./ProcessEvent";
export class Processable extends Dispatchable {

  constructor(){
    super();
  }

  public execute():void{
    this.complete();
  }
  public destroy():void{}
  public complete():void{
    this.dispatch(new ProcessEvent(ProcessEvent.ON_COMPLETE));
  }
}
