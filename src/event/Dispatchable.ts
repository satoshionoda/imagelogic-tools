import {FauxEvent} from "./FauxEvent";
import {FnDelegate} from "../util/FnDelegate";

export class Dispatchable {
  private dispatchers: Object = {};

  public bind(type: string, delegate: FnDelegate);
  public bind(type: string, fn: Function, context?: any, ...args: any[]);
  public bind(type: string, param1: any, param2?: any, ...rest: any[]) {
    let d: FnDelegate;

    if(typeof(param1) === "function") {
      d = new FnDelegate(param1, param2, ...rest);
    } else {
      d = param1;
    }

    if(typeof this.dispatchers[type] === "undefined") {
      this.dispatchers[type] = [];
    }

    this.dispatchers[type].push(d);
  }

  public unbind(type: string, fn?: Function) {
    let dispatcher: any = this.dispatchers[type] || [];
    let l = dispatcher.length;
    let i: number;
    let handler: FnDelegate;
    for(i = l - 1; i >= 0; i--) {
      handler = dispatcher[i];
      if(fn === undefined) {
        dispatcher.splice(i, 1);
      } else if(fn === handler.fn) {
        dispatcher.splice(i, 1);
      }
    }
  }

  public dispatch(str: string): void;
  public dispatch(e: FauxEvent): void;
  public dispatch(param1: any): void {
    let type: string;
    let e: FauxEvent;
    switch(true) {
      case typeof(param1) === "string":
        type = param1;
        e = new FauxEvent(type);
        break;
      case param1.type !== undefined:
        type = param1.type;
        e = param1;
        break;
    }

    let dispatcher = this.dispatchers[type] || [];
    let l = dispatcher.length;
    let i;
    let d: FnDelegate;
    for(i = 0; i < l; i++) {
      d = dispatcher[i];

      e.context = d.context;
      e.target = this;
      d.prependArgs(e);
      d.execute();
    }
  }
}
