import {ValidateResult} from "./ValidateResult";
import {qs} from "../dom/qs";

export function validateAndEmpty(targetNames: string[], msg: string): ValidateResult {
  let rObject: ValidateResult = {
    result: true,
    name: targetNames,
  };

  let items = [];
  targetNames.forEach((targetName) => {
    let query = `*[name="${targetName}"]`;
    let item = qs(query);
    items.push(item);

    let val = item["value"];
    if(val.length === 0) {
      rObject.result = false;
    }
  });

  if(!rObject.result) {
    rObject.msg = msg;
  }

  rObject.items = items;

  return rObject;
}
