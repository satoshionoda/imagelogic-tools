import {FnDelegate} from "../../src/util/FnDelegate";


class FnDelegateTest {
  private val: string = "test";

  constructor() {
    this.canExecuteInternal();
    this.canExecuteExternal();
    this.canPrependArgs();
    this.canAppendArgs();
  }

  canExecuteInternal() {
    it("can execute internal function", (done) => {
      let d: FnDelegate = new FnDelegate(() => {
        done();
      });
      d.execute();
    });
  }

  canExecuteExternal() {
    it("can execute external function", (done) => {
      let d: FnDelegate = new FnDelegate(this.trigger1, this, done);
      d.execute();
    });
  }

  canPrependArgs() {
    it("can prepend args", (done) => {
      let d: FnDelegate = new FnDelegate(this.trigger2, this, done);
      d.prependArgs(1, 2);
      d.execute();
    });
  }

  canAppendArgs() {
    it("can append args", (done) => {
      let d: FnDelegate = new FnDelegate(this.trigger3, this, done);
      d.apendArgs(1, 2);
      d.execute();
    });
  }

  trigger1(done) {
    expect(this.val).toBe("test");
    done();
  }

  trigger2(val1, val2, done) {
    expect(val1).toBe(1);
    expect(val2).toBe(2);
    done();
  }

  trigger3(done, val1, val2) {
    expect(val1).toBe(1);
    expect(val2).toBe(2);
    done();
  }
}

describe("FnDelegate", () => {
  new FnDelegateTest();
});
