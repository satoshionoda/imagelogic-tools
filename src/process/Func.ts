import {Processable} from "./Processable";
import {FnDelegate} from "../util/FnDelegate";

export class Func extends Processable{
  private delegate:FnDelegate;

  constructor(fn:Function, context?:any, ...args:any[]){
    super();
    this.delegate = new FnDelegate(fn, context, ...args);
  }

  execute(){
    this.delegate.execute();
    super.complete();
  }

  destroy(){
    if(this.delegate){
      this.delegate.destroy();
      this.delegate = null;
    }
  }
}
