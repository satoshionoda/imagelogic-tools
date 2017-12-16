import {Listen} from "../../src/process/Listen";
import {Wait} from "../../src/process/Wait";
import {ProcessEvent} from "../../src/process/ProcessEvent";
import {FauxEvent} from "../../src/event/FauxEvent";
let expect = chai.expect;

class ListenTest{

  private val:string = "test";

  constructor(){
    this.canListen();
    this.canListenAndTriggerExternal();
    this.canListenDOM();
    this.canListenDOMAndTriggerExternal();
  }

  canListen(){
    it("can listen", (done) => {
      let wait = new Wait(50);
      let listen:Listen = new Listen(wait, ProcessEvent.ON_COMPLETE);
      listen.bind(ProcessEvent.ON_COMPLETE, () => {
        done();
      });
      listen.execute();
      wait.execute();
    })
  }
  canListenAndTriggerExternal(){
    it("can listen and trigger external function", (done) => {
      let wait = new Wait(50);
      let listen:Listen = new Listen(wait, ProcessEvent.ON_COMPLETE, this.trigger, this, done);
      listen.execute();
      wait.execute();
    });
  }

  canListenDOM(){
    it("can listen DOM event", (done) => {
      let btn:HTMLElement = document.getElementById("btn1");
      let listen:Listen = new Listen(btn, "click");
      //
      listen.bind(ProcessEvent.ON_COMPLETE, () => {
         done();
      });
      listen.execute();
      btn.click();
    });
  }
  canListenDOMAndTriggerExternal(){
    it("can listen DOM event and trigger external function", (done) => {
      let btn:HTMLElement = document.getElementById("btn1");
      let listen:Listen = new Listen(btn, "click", this.trigger, this, done);
      listen.execute();
      btn.click();
    });
  }

  trigger(e:FauxEvent, done){
    expect(this.val).to.be.equal("test");
    done();
  }
}

describe("process listen", () => {
  beforeEach(() => {
    //how to implement fixtures
    //http://webdesign-dackel.com/2015/11/02/karma-mocha-power-assert-dom-test/
    document.body.innerHTML = window.__html__["test/fixtures/btns.html"];
    //window.navigator
  });
  new ListenTest();
});
