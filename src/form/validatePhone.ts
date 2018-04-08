import {ValidateResult} from "./ValidateResult";
import {makeValidateResult} from "./makeValidateResult";

/**
 * validate Phone allows not only numbers but also some special characters like "()-+ ";
 * @param {string} targetName
 * @param {string} msg
 * @param minLength
 * @returns {ValidateResult}
 */
export function validatePhone(targetName: string, msg: string, minLength:number = 8): ValidateResult {
  let rObject = makeValidateResult(targetName)
  let val: string = rObject.value;

  rObject.result = val.match(/^[0-9\-+() ]+$/) !== null;

  if(minLength <= 0){
    throw new Error();
  }

  if(val.length < minLength) {
    rObject.result = false;
  }

  // should pass the validation if the length is 0
  // otherwise it denies even if the field is not required.
  if(val.length === 0) {
    rObject.result = true;
  }

  if(rObject.result === false) {
    rObject.msg = msg;
  }
  return rObject;
}
