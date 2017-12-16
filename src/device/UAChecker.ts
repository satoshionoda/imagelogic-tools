import {UAName} from "./UAName";
export class UAChecker{

  static _isWindowsPhone: boolean;
  static _isAndroid: boolean;
  static _isAndroidMobile: boolean;
  static _isAndroidTablet: boolean;
  static _isIPad: boolean;
  static _isIPhone: boolean;
  static _isIOS: boolean;
  static _isTablet: boolean;
  static _isSMP: boolean;
  static _isMobile: boolean;

  static isWindowsPhone(addCSSClass: boolean = false): boolean {
    if(UAChecker._isWindowsPhone === undefined) {
      UAChecker._isWindowsPhone = navigator.userAgent.match(/Windows Phone/i) !== null;
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.WINDOWS_PHONE, UAChecker._isWindowsPhone);
    }
    return UAChecker._isWindowsPhone;
  }

   static isAndroid(addCSSClass: boolean = false): boolean {
    if(UAChecker._isAndroid === undefined) {
      UAChecker._isAndroid = navigator.userAgent.match(/Android/i) !== null;
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.ANDROID, UAChecker._isAndroid);
    }
    return UAChecker._isAndroid;
  }

   static isAndroidMobile(addCSSClass: boolean = false): boolean {
    if(UAChecker._isAndroidMobile === undefined) {
      UAChecker._isAndroidMobile = navigator.userAgent.match(/Android.*Mobile/i) !== null;
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.ANDROID_MOBILE, UAChecker._isAndroidMobile);
    }
    return UAChecker._isAndroidMobile;
  }

   static isAndroidTablet(addCSSClass: boolean = false): boolean {
    if(UAChecker._isAndroidTablet === undefined) {
      UAChecker._isAndroidTablet = !UAChecker.isAndroidMobile() && UAChecker.isAndroid();
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.ANDROID_TABLET, UAChecker._isAndroidTablet);
    }
    return UAChecker._isAndroidTablet;
  }

   static isIPad(addCSSClass: boolean = false): boolean {
    if(UAChecker._isIPad === undefined) {
      UAChecker._isIPad = navigator.userAgent.match(/iPad/i) !== null;
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.IPAD, UAChecker._isIPad);
    }
    return UAChecker._isIPad;
  }

   static isIphone(addCSSClass: boolean = false): boolean {
    if(UAChecker._isIPhone === undefined) {
      UAChecker._isIPhone = navigator.userAgent.match(/iPhone/i) !== null;
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.IPHONE, UAChecker._isIPhone);
    }
    return UAChecker._isIPhone;
  }

   static isIOS(addCSSClass: boolean = false): boolean {
    if(UAChecker._isIOS === undefined) {
      UAChecker._isIOS = UAChecker.isIPad() || UAChecker.isIphone();
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.IOS, UAChecker._isIOS);
    }
    return UAChecker._isIOS;
  }

   static isTablet(addCSSClass: boolean = false): boolean {
    if(UAChecker._isTablet === undefined) {
      UAChecker._isTablet = UAChecker.isIPad() || UAChecker.isAndroidTablet();
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.TABLET, UAChecker._isTablet);
    }
    return UAChecker._isTablet;
  }

   static isSMP(addCSSClass: boolean = false): boolean {
    if(UAChecker._isSMP === undefined) {
      UAChecker._isSMP = UAChecker.isIphone() || UAChecker.isAndroidMobile() || UAChecker.isWindowsPhone();
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.SMP, UAChecker._isSMP);
    }
    return UAChecker._isSMP;
  }

   static isMobile(addCSSClass: boolean = false): boolean {
    if(UAChecker._isMobile === undefined) {
      UAChecker._isMobile = UAChecker.isSMP() || UAChecker.isTablet();
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.MOBILE, UAChecker._isMobile);
    }
    return UAChecker._isMobile;
  }

   static reset() {
    UAChecker._isWindowsPhone = undefined;
    UAChecker._isAndroid = undefined;
    UAChecker._isAndroidMobile = undefined;
    UAChecker._isAndroidTablet = undefined;
    UAChecker._isIPad = undefined;
    UAChecker._isIPhone = undefined;
    UAChecker._isIOS = undefined;
    UAChecker._isTablet = undefined;
    UAChecker._isSMP = undefined;
    UAChecker._isMobile = undefined;
  }

  static setCSSClass(ua: string, flag: boolean) {
    let token: string = flag ? ua : `not-${ua}`;
    document.documentElement.classList.add(token);
  }
}


