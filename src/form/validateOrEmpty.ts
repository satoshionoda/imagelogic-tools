import {ValidateResult} from "./ValidateResult";
import {qs} from "../dom/qs";

export function validateOrEmpty(targetNames: string[], msg: string): ValidateResult {
  let rObject: ValidateResult = {
    result: false,
    name: targetNames,
  };

  let items = [];
  targetNames.forEach((targetName) => {
    let query = `*[name="${targetName}"]`,
      item = qs(query);
    items.push(item);

    let val = item["value"];
    if(val.length > 0) {
      rObject.result = true;
    }
  });

  if(!rObject.result) {
    rObject.msg = msg;
  }

  rObject.items = items;

  return rObject;
}
