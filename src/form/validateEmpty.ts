import {ValidateResult} from "./ValidateResult";
import {makeValidateResult} from "./makeValidateResult";

export function validateEmpty(targetName: string, msg: string): ValidateResult {
  let rObject = makeValidateResult(targetName),
    val: string = rObject.value;

  rObject.result = val.length > 0;

  if(!rObject.result) {
    rObject.msg = msg;
  }

  return rObject;
}
