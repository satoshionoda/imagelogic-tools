import {Func} from "../../src/process/Func";

let expect = chai.expect;

class FuncTest{
  private val:string = "test";

  constructor(){
    this.canTriggerInternalFunc();
    this.canTriggerExternalFunc();
  }


  canTriggerInternalFunc(){
    it("can trigger internal function", (done) => {
      let func = new Func(() => {
        done();
      });
      func.execute();
    });
  }
  canTriggerExternalFunc(){
    it("can trigger external function", (done) => {
      let func = new Func(this.trigger, this, done);
      func.execute();
  	});
  }
  canHandleComplete(){
    it("can handle compete event", (done) => {
      let func = new Func(() => {

      });
    });
  }

  trigger(done){
    expect(this.val).to.be.equal("test");
    done();
  }
}

describe("process func", () => {
  new FuncTest();
});
