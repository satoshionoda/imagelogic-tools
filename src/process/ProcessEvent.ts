import {FauxEvent} from "../event/FauxEvent";

export class ProcessEvent extends FauxEvent{
  static readonly ON_COMPLETE:string = "complete";
  static readonly ON_WAIT:string = "waited";
  static readonly ON_LISTEN:string = "listened";

  constructor(type){
    super(type);
  }
}
