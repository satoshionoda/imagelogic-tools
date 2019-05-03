import {IntervalCheck} from "../../src/process/IntervalCheck";
import {ProcessEvent} from "../../src/process/ProcessEvent";

class IntervalCheckSpec{
  private val:number = 0;

  constructor(){
    this.canCheckInternal();
    this.canCheckExternal();
  }

  canCheckInternal(){
    it("can check internal function", (done) => {
      let i = 0;
      let check:IntervalCheck = new IntervalCheck(50, () => {
        i ++;
        return (i > 5);
      }, this);
      check.bind(ProcessEvent.ON_COMPLETE, () => {
        done();
      });
      check.execute();
    });
  }
  canCheckExternal(){
    it("can check external function", (done) => {
      this.val = 0;
      let check = new IntervalCheck(50, this.checkTrigger, this, 5);
      check.bind(ProcessEvent.ON_COMPLETE, () => {
        done();
      });
      check.execute();
    });
  }
  private checkTrigger(increment){
    this.val += increment;
    return (this.val >= 100);
  }
}

describe("process interval check", () => {
  new IntervalCheckSpec();
});
