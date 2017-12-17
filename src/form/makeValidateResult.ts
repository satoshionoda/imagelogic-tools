import {ValidateResult} from "./ValidateResult";
import {qs} from "../dom/qs";

export function makeValidateResult(targetName): ValidateResult {
  let query = `*[name="${targetName}"]`;
  let item = qs(query);
  let val: string = item["value"];

  let rObject: ValidateResult = {
    result: false,
    name: targetName,
    items: [item],
    value: val
  };

  return rObject;
}
