import {remapQueriedItems} from "./remapQueriedItems";
import {addClass} from "./addClass";
import {removeClass} from "./removeClass";

export function addClassIf(target: Element | Element[] | NodeList, condition:boolean, token:string, remove:boolean = true, alt:string = ""){
  if(target instanceof NodeList) {
    target = remapQueriedItems(target);
  }
  if(target instanceof Array) {
    target.forEach((elm) => {
      _addClassIf(elm, condition, token, remove, alt);
    });
  }else{
    _addClassIf(target, condition, token, remove, alt);
  }

}

function _addClassIf(target:Element, condition:boolean, token:string, remove:boolean, alt:string){
  if(condition){
    addClass(target, token);
    if(remove && alt){
      removeClass(target, alt);
    }
  }else{
    if(alt){
      addClass(target, alt);
    }
    if(remove){
      removeClass(target, token);
    }
  }
}
