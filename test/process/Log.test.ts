import {Log} from "../../src/process/Log";
import {ProcessEvent} from "../../src/process/ProcessEvent";

describe("process log", () => {
  it("can log", (done) => {
    let log = new Log("this is log test");
    log.bind(ProcessEvent.ON_COMPLETE, () => {
      done();
    });
    log.execute();
  });
});
