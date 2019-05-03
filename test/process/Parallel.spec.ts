import {Func} from "../../src/process/Func";
import {Parallel} from "../../src/process/Parallel";
import {ProcessEvent} from "../../src/process/ProcessEvent";
import {Wait} from "../../src/process/Wait";


class ParallelSpec {
  constructor() {
    this.canExecuteParallel();
  }

  canExecuteParallel() {
    it("can exceute parallel", (done) => {
      let val: number = 0;

      let func1 = new Func(() => {
        val++;
      });

      let func2 = new Func(() => {
        val++;
      });

      let wait = new Wait(500, () => {
        val++;
      });

      let p = new Parallel([func1]);
      p.add(func2);
      p.insert(wait);
      p.bind(ProcessEvent.ON_COMPLETE, () => {
        if(val >= 3) {
          done();
        }
      });
      p.execute();
      expect(p.getIsRunning()).toBe(true);
    });
  }
}

describe("process parallel", () => {
  new ParallelSpec();
});
