import {ValidateResult} from "./ValidateResult";
import {makeValidateResult} from "./makeValidateResult";

export function validateLength(targetName, msg: string, min: number = 0, max: number = Infinity): ValidateResult {
  let rObject = makeValidateResult(targetName);

  let l: number = rObject.value.length;
  rObject.result = (l >= min) && (l <= max);

  // should pass the validation if the length is 0
  // otherwise it denies even if the field is not required.
  if(l === 0) {
    rObject.result = true;
  }

  if(rObject.result === false) {
    rObject.msg = msg;
  }

  return rObject;
}
