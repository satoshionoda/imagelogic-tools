import {validateEmpty} from "../../src/form/validateEmpty";
import {validateNumOnly} from "../../src/form/validateNumOnly";
import {validateLength} from "../../src/form/validateLength";
import {validatePhone} from "../../src/form/validatePhone";
import {validateKatakana} from "../../src/form/validateKatakana";
import {validateMail} from "../../src/form/validateMail";
import {validateAndEmpty} from "../../src/form/validateAndEmpty";
import {validateOrEmpty} from "../../src/form/validateOrEmpty";
import {validateChecked} from "../../src/form/validateChecked";
import {qsa} from "../../src/dom/qsa";
import {qs} from "../../src/dom/qs";
import {validateBirthday} from "../../src/form/validteBirthday";

let expect = chai.expect;

class ValidateFormTest {
  constructor() {
    it("validates empty", () => {
      let r1 = validateEmpty("empty", "");
      expect(r1.result).to.be.false;

      let r2 = validateEmpty("strings", "");
      expect(r2.result).to.be.true;
    });

    it("validates num only", () => {
      let r1 = validateNumOnly("strings", "");
      expect(r1.result).to.be.false;

      let r2 = validateNumOnly("numbers", "");
      expect(r2.result).to.be.true;
    });

    it("validates strings' length", () => {
      // strings field's value is "hogehoge", 8 letters;
      let r1 = validateLength("strings", "", 2);
      expect(r1.result).to.be.true;

      let r2 = validateLength("strings", "", 2, 4);
      expect(r2.result).to.be.false;
    });

    it("validates phone number", () => {
      let r1 = validatePhone("phone", "");
      expect(r1.result).to.be.true;

      let r2 = validatePhone("strings", "");
      expect(r2.result).to.be.false;

      let r3 = validatePhone("numbers", "", 4);
      expect(r3.result).to.be.true;
    });

    it("validates katakana", () => {
      let r1 = validateKatakana("katakana", "");
      expect(r1.result).to.be.true;

      let r2 = validateKatakana("strings", "");
      expect(r2.result).to.be.false;

      let r3 = validateKatakana("empty", "");
      expect(r3.result).to.be.true;
    });

    it("validates email", () => {
      let r1 = validateMail("mail", "");
      expect(r1.result).to.be.true;

      let r2 = validateMail("fakeMail1", "");
      expect(r2.result).to.be.false;

      let r3 = validateMail("fakeMail2", "");
      expect(r3.result).to.be.false;
    });

    it("validates each field is not empty", () => {
      let r1 = validateAndEmpty(["empty", "strings"], "");
      expect(r1.result).to.be.false;

      let r2 = validateAndEmpty(["katakana", "strings"], "");
      expect(r2.result).to.be.true;
    });

    it("validates selected filed has at least one value", () => {
      let r1 = validateOrEmpty(["empty", "katakana"], "");
      expect(r1.result).to.be.true;
    });

    it("validates checkBox is checked", () => {
      let r1 = validateChecked("checkTest", "");
      expect(r1.result).to.be.false;
      let items:HTMLInputElement[] = qsa("input[name=checkTest]");
      items[0].checked = true;
      let r2 = validateChecked("checkTest", "");
      expect(r2.result).to.be.true;
      //
    });

    it.only("validates birthday", () => {
      const nameY = "birthYear";
      const nameM = "birthMonth";
      const nameD = "birthDay";
      const inputY:HTMLInputElement = qs(`input[name=${nameY}]`);
      const inputM:HTMLInputElement = qs(`input[name=${nameM}]`);
      const inputD:HTMLInputElement = qs(`input[name=${nameD}]`);
      //
      inputY.value = "1983";
      inputM.value = "9";
      inputD.value = "15";
      let r1 = validateBirthday(nameY, nameM, nameD, "");

      expect(r1.result).to.be.true;

    });
  }

}


describe("validate form inputs", () => {
  beforeEach(() => {
    document.body.innerHTML = window.__html__["test/fixtures/form.html"];
  });
  new ValidateFormTest();
});
