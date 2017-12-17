import {ValidateResult} from "./ValidateResult";
import {makeValidateResult} from "./makeValidateResult";

export function validateMail(targetName: string, msg: string): ValidateResult {
  let rObject = makeValidateResult(targetName)
  let val: string = rObject.value;

  rObject.result = val.match(/.+@.+\..+/) !== null;

  if(val.length === 0) {
    rObject.result = true;
  }

  if(rObject.result === false) {
    rObject.msg = msg;
  }
  return rObject;
}
