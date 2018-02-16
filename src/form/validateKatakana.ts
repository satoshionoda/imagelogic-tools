import {ValidateResult} from "./ValidateResult";
import {makeValidateResult} from "./makeValidateResult";

export function validateKatakana(targetName: string, msg: string): ValidateResult {
  let rObject = makeValidateResult(targetName),
    val = rObject.value;

  rObject.result = val.match(/^[ァ-ン\s　]+$/) !== null;

  if(val.length === 0) {
    rObject.result = true;
  }

  if(rObject.result === false) {
    rObject.msg = msg;
  }

  return rObject;
}
