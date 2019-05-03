import {Processable} from "../../src/process/Processable";
import {ProcessEvent} from "../../src/process/ProcessEvent";

class ProcessableSpec{
  private val:string = "test";

  constructor(){
    this.canBindInternally();
    this.canBindExternally();
  }

  canBindInternally(){
    it("can bind internally", (done) => {
      let p:Processable = new Processable();
      p.bind(ProcessEvent.ON_COMPLETE, () => {
        done();
      });
      p.execute();
    });
  }
  canBindExternally(){
    it("can bind externally", (done) => {
      let p:Processable = new Processable();
      p.bind(ProcessEvent.ON_COMPLETE, this.handler, this, done);
      p.execute();
    });
  }


  handler(e:ProcessEvent, done){
    expect(this.val).toBe("test");
    expect(this).toBe(e.context);
    if(done){
      done();
    }
  }

}

describe("processable", () => {
  new ProcessableSpec();
});
