import {Processable} from "../../src/process/Processable";
import {Func} from "../../src/process/Func";
let expect = chai.expect;

class ParallelTest{
  constructor(){
    let func = new Func(() => {
      expect(true).to.be.true;
    });

    let list:Processable[] = [

    ];
  }


}

describe("process parallel", () => {
  new ParallelTest();
});
