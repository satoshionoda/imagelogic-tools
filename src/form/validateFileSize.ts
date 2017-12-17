import {makeValidateResult} from "./makeValidateResult";
import {ValidateResult} from "./ValidateResult";

export function validateFileSize(targetName, msg: string, max: number = 2): ValidateResult {
  let rObject = makeValidateResult(targetName);

  let item: HTMLInputElement = <HTMLInputElement>rObject.items[0];


  if(item.files.length == 0) {
    rObject.result = true;
    return rObject;
  }

  rObject.result = item.files[0].size <= max * 1024 * 1024

  if(rObject.result == false) {
    rObject.msg = msg;
  }

  return rObject;
}
