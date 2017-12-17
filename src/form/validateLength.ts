import {ValidateResult} from "./ValidateResult";
import {makeValidateResult} from "./makeValidateResult";

export function validateLength(targetName, msg: string, min: number = 0, max: number = Infinity): ValidateResult {
  let rObject = makeValidateResult(targetName);

  let l: number = rObject.value.length;
  rObject.result = (l >= min) && (l <= max);

  if(l == 0) {
    rObject.result = true;
  }

  if(rObject.result == false) {
    rObject.msg = msg;
  }

  return rObject;
}
