import {ValidateResult} from "./ValidateResult";
import {qs} from "../dom/qs";


export function validateBirthday(nameY: string, nameM: string, nameD: string, msg: string, min: number = 20) {
  function makeResult(result:boolean):ValidateResult{
    return {
      result: result,
      name: [nameY, nameM, nameD]
    };
  }

  const inputY: HTMLInputElement = qs(`input[name=${nameY}]`);
  const inputM: HTMLInputElement = qs(`input[name=${nameM}]`);
  const inputD: HTMLInputElement = qs(`input[name=${nameD}]`);

  let today: Date = new Date();

  let yearDiff = today.getFullYear() - parseInt(inputY.value);
  if(yearDiff > min){
    return makeResult(true);
  }else if(yearDiff < min){
    return makeResult(false);
  }

  let monthDiff = today.getMonth() + 1 - parseInt(inputM.value);
  if(monthDiff > 0 ){
    return makeResult(true);
  }else if (monthDiff < 0){
    return makeResult(false);
  }

  let dayDiff = today.getDate() - parseInt(inputD.value);
  if(dayDiff >= 0 ){
    return makeResult(true);
  }else if (dayDiff < 0){
    return makeResult(false);
  }

}
