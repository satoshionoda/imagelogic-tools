import {ValidateResult} from "./ValidateResult";

export function validateChecked(targetName: string, msg: string): ValidateResult {
  let rObject: ValidateResult = {
    result: false,
    name: targetName,
  };

  let query = `input[name="${targetName}"]`,
    items = document.querySelectorAll(query);

  rObject.items = [];

  for(let i: number = 0; i < items.length; i++) {
    let item: HTMLInputElement = <HTMLInputElement>items[i];
    if(item.checked == true) {
      rObject.result = true;
    }
  }
  for(let i: number = 0; i < items.length; i++) {
    let item: HTMLInputElement = <HTMLInputElement>items[i];
    rObject.items.push(item);
  }

  if(rObject.result == false) {
    rObject.msg = msg
  }

  return rObject;
}
