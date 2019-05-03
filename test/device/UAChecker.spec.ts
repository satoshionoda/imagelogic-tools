import {UAChecker} from "../../src/device/UAChecker";

const UA_IPHONE:string = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 ";
const UA_IPAD:string = "Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4";
const UA_EXPERIA:string = "Mozilla/5.0 (Linux; Android 6.0.1; SOV34 Build/39.0.C.0.282) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36";
const UA_KINDLE_FIRE:string = "Mozilla/5.0 (Linux; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/44.1.54 like Chrome/44.0.2403.63 Safari/537.36";

describe("UAchecker", () => {
  describe("when UA is iPhone", () => {
    beforeEach(() => {
      UAChecker.reset();
      changeUserAgent(UA_IPHONE);
    });
    it("is iPhone", () => {
      expect(UAChecker.isIphone()).toBeTruthy();
    });
    it("is NOT iPad", () => {
      expect(UAChecker.isIPad()).toBeFalsy();
    });
    it("is iOS", () => {
      expect(UAChecker.isIOS()).toBeTruthy();
    });
    it("is NOT Android", () => {
      expect(UAChecker.isAndroid()).toBeFalsy();
    });
    it("is mobile", () => {
      expect(UAChecker.isMobile()).toBeTruthy();
    });
  });
});


// modify User agent for testing
// http://qiita.com/kyohei8/items/bdf3e7b76e1218d06b3d
const changeUserAgent = (ua) => {
  // Chrome, fx, IE11
  window.navigator.__defineGetter__("userAgent", () => ua);
  // Safari
}
