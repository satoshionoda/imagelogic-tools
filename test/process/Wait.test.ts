import {FauxEvent} from "../../src/event/FauxEvent";
import {Wait} from "../../src/process/Wait";
import {ProcessEvent} from "../../src/process/ProcessEvent";
let expect = chai.expect;

class WaitTest{
  private val:string = "test";

  constructor(){
    this.canWait();
    this.internalHandler();
    this.externalHandler();
    this.externalHandlerWithArrow();
  }

  canWait(){
    it("can wait", (done) => {
      let process:Wait = new Wait(50);
      process.bind(ProcessEvent.ON_COMPLETE, () => {
        done();
      });
      process.execute();
    });
  }

  internalHandler(){
    it("can wait and trigger internal handlerReferringThis", (done) => {
      let process:Wait = new Wait(50, () => {
        done();
      });
      process.execute();
    });
  }

  externalHandler(){
    let that = this;
    it("can wait and trigger1 external handlerReferringThis", function(done){
      let process:Wait = new Wait(50, that.trigger, that, done);
      process.execute();
    });
  }

  externalHandlerWithArrow(){
    it("can wait and trigger1 external handlerReferringThis", (done)=>{
      let process:Wait = new Wait(50, this.trigger, this, done);
      process.execute();
    });
  }

  trigger(e:FauxEvent, done){
    expect(this.val).to.be.equal("test");
    expect(e.type).to.be.equal(ProcessEvent.ON_WAIT);
    done();
  }

}
describe("process wait", () => {
  new WaitTest();
});
