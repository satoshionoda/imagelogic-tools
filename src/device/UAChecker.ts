import {UAName} from "./UAName";

export class UAChecker {

  private static _isWindowsPhone: boolean;
  private static _isAndroid: boolean;
  private static _isAndroidMobile: boolean;
  private static _isAndroidTablet: boolean;
  private static _isIPad: boolean;
  private static _isIPhone: boolean;
  private static _isIOS: boolean;
  private static _isTablet: boolean;
  private static _isSMP: boolean;
  private static _isMobile: boolean;
  private static _isIE9:boolean;
  private static _isIE10:boolean;
  private static _isIE11:boolean;

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
      UAChecker._isAndroidTablet = !UAChecker.isAndroidMobile(addCSSClass) && UAChecker.isAndroid(addCSSClass);
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
      UAChecker._isIOS = UAChecker.isIPad(addCSSClass) || UAChecker.isIphone(addCSSClass);
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.IOS, UAChecker._isIOS);
    }
    return UAChecker._isIOS;
  }

  static isTablet(addCSSClass: boolean = false): boolean {
    if(UAChecker._isTablet === undefined) {
      UAChecker._isTablet = UAChecker.isIPad(addCSSClass) || UAChecker.isAndroidTablet(addCSSClass);
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.TABLET, UAChecker._isTablet);
    }
    return UAChecker._isTablet;
  }

  static isSMP(addCSSClass: boolean = false): boolean {
    if(UAChecker._isSMP === undefined) {
      UAChecker._isSMP = UAChecker.isIphone(addCSSClass) || UAChecker.isAndroidMobile(addCSSClass) || UAChecker.isWindowsPhone(addCSSClass);
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.SMP, UAChecker._isSMP);
    }
    return UAChecker._isSMP;
  }

  static isMobile(addCSSClass: boolean = false): boolean {
    if(UAChecker._isMobile === undefined) {
      UAChecker._isMobile = UAChecker.isSMP(addCSSClass) || UAChecker.isTablet(addCSSClass);
    }
    if(addCSSClass) {
      UAChecker.setCSSClass(UAName.MOBILE, UAChecker._isMobile);
    }
    return UAChecker._isMobile;
  }

  static isIE9(addCSSClass: boolean = false):boolean{
    if(UAChecker._isIE9 === undefined){
      UAChecker._isIE9 = navigator.userAgent.match(/MEIE 9\.0/i) !== null;
    }
    if(addCSSClass){
      UAChecker.setCSSClass(UAName.IE9, UAChecker._isIE9);
    }
    return UAChecker._isIE9;
  }

  static isIE10(addCSSClass: boolean = false):boolean{
    if(UAChecker._isIE10 === undefined){
      UAChecker._isIE10 = navigator.userAgent.match(/MEIE 10\.0/i) !== null;
    }
    if(addCSSClass){
      UAChecker.setCSSClass(UAName.IE10, UAChecker._isIE10);
    }
    return UAChecker._isIE10;
  }

  static isIE11(addCSSClass: boolean = false):boolean{
    if(UAChecker._isIE11 === undefined){
      UAChecker._isIE11 = navigator.userAgent.match(/MEIE 11\.0/i) !== null;
    }
    if(addCSSClass){
      UAChecker.setCSSClass(UAName.IE11, UAChecker._isIE11);
    }
    return UAChecker._isIE11;
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
    UAChecker._isIE9 = undefined;
    UAChecker._isIE10 = undefined;
    UAChecker._isIE11 = undefined;

    for(let className in UAName) {
      document.documentElement.classList.remove(className);
      document.documentElement.classList.remove(`not-${className}`);
    }
  }

  private static setCSSClass(ua: string, flag: boolean) {
    let token: string = flag ? ua : `not-${ua}`;
    document.documentElement.classList.add(token);
  }
}


