import {Processable} from "./Processable";

export class Log extends Processable{

  private str:string;

  constructor(str:string){
    super();
    this.str = str;
  }

  execute(){
    console.log(this.str);
    super.complete();
  }

  destroy(): void {}
}
