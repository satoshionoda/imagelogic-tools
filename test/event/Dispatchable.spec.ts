import {Dispatchable} from "../../src/event/Dispatchable";
import {FauxEvent} from "../../src/event/FauxEvent";
import {FnDelegate} from "../../src/util/FnDelegate";

const EVENT_COMPLETE: string = "complete";
const EVENT_DONE: string = "done";


class DispatchableSpec {

  private val: string = "test";
  private handlingCount: number = 0;

  constructor() {
    this.canBindInternal();
    this.canBindExternal();
    this.canBindWithDelegateClass();
    this.canHandleMultipleInternal();
    this.canHandleMultipleExternal();
    this.canUnbindInternal();
    this.canUnbindExternal();
    this.canUnbindMulti();
  }

  canBindInternal() {
    it("can bind internally", (done) => {
      let obj: Dispatchable = new Dispatchable();
      obj.bind(EVENT_COMPLETE, () => {
        done();
      });
      obj.dispatch(EVENT_COMPLETE);
    });
  }

  canBindExternal() {
    it("can bind external function", (done) => {
      let obj: Dispatchable = new Dispatchable();
      obj.bind(EVENT_COMPLETE, this.handler, this, done);
      obj.dispatch(EVENT_COMPLETE);
    });
  }

  canBindWithDelegateClass() {
    it("can bind with the delegate class", (done) => {
      let obj: Dispatchable = new Dispatchable(),
        delegate: FnDelegate = new FnDelegate(this.handler, this, done);
      obj.bind(EVENT_COMPLETE, delegate);
      obj.dispatch(EVENT_COMPLETE);
    });
  }

  canHandleMultipleInternal() {
    it("can handle multiple callbacks", (done) => {
      let obj: Dispatchable = new Dispatchable(),
        count = 0;

      obj.bind(EVENT_COMPLETE, () => {
        count++;
        if (count === 3) {
          done();
        }
      });
      obj.bind(EVENT_COMPLETE, () => {
        count++;
        if (count === 3) {
          done();
        }
      });
      obj.bind(EVENT_DONE, () => {
        count++;
        if (count === 3) {
          done();
        }
      });
      obj.dispatch(EVENT_COMPLETE);
      obj.dispatch(EVENT_DONE);
    });
  }

  canHandleMultipleExternal() {
    it("can handle multiple external events", (done) => {
      let obj: Dispatchable = new Dispatchable();
      obj.bind(EVENT_COMPLETE, this.handlerMulti, this, done, 2);
      obj.bind(EVENT_COMPLETE, this.handlerMulti, this, done, 3);
      obj.bind(EVENT_DONE, this.handlerMulti, this, done, 10);
      obj.dispatch(EVENT_COMPLETE);
      obj.dispatch(EVENT_COMPLETE);
      obj.dispatch(EVENT_DONE);
    });
  }

  canUnbindInternal() {
    it("can unbind internally", (done) => {
      let obj: Dispatchable = new Dispatchable();

      function onComplete() {
        throw new Error("this shouldn't happen");
      }

      obj.bind(EVENT_COMPLETE, onComplete);
      obj.unbind(EVENT_COMPLETE, onComplete);
      obj.dispatch(EVENT_COMPLETE);
      done();
    });
  }

  canUnbindExternal() {
    it("can unbind externally", (done) => {
      let obj: Dispatchable = new Dispatchable();
      obj.bind(EVENT_COMPLETE, this.handlerWithError);
      obj.bind(EVENT_COMPLETE, this.handler, this, done);
      obj.unbind(EVENT_COMPLETE, this.handlerWithError);
      obj.dispatch(EVENT_COMPLETE);
    });
  }

  canUnbindMulti() {
    it("can unbind multi", (done) => {
      let obj: Dispatchable = new Dispatchable();
      obj.bind(EVENT_COMPLETE, this.handlerWithError);
      obj.bind(EVENT_COMPLETE, this.handlerWithError2);
      obj.unbind(EVENT_COMPLETE);
      obj.dispatch(EVENT_COMPLETE);
      done();
    });
  }

  handler(e: FauxEvent, done) {
    expect(this.val).toBe("test");
    expect(this).toBe(e.context);
    if (done) {
      done();
    }
  }

  handlerMulti(e: FauxEvent, done, add) {
    this.handlingCount += add;
    // console.log(add);
    if (this.handlingCount === 20) {
      done();
    }
  }

  handlerWithError(e?: FauxEvent) {
    throw new Error("this shouldn't happen");
  }

  handlerWithError2(e?: FauxEvent) {
    throw new Error("this shouldn't happen");
  }
}

describe("dispatchable", () => {
  new DispatchableSpec();
});
