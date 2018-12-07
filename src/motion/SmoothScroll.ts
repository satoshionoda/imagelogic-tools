import {Easing, EasingType} from "./Easing";
import {viewportOffset} from "../layout/viewportOffset";

export class SmoothScroll {
  private static instance: SmoothScroll;

  public isScrolling: boolean = false;

  private defaultOptions: SmoothScrollOptions;
  private options: SmoothScrollOptions;
  private intervalID: number;
  private interval: number;
  private timeLapsed: number;
  private percentage: number;
  private startLocation: number;
  private endLocation: number;
  private distance: number;
  private position;

  public static getInstance(): SmoothScroll {
    if(!SmoothScroll.instance) {
      SmoothScroll.instance = new SmoothScroll();
    }
    return SmoothScroll.instance;
  }

  public static setDefault(sso: SmoothScrollOptions) {
    let instance = SmoothScroll.getInstance();

    if(sso.duration || sso.duration === 0) {
      instance.defaultOptions.duration = sso.duration;
    }
    if(sso.easing) {
      instance.defaultOptions.easing = sso.easing;
    }
    if(sso.offset || sso.offset === 0) {
      instance.defaultOptions.offset = sso.offset;
    }
  }

  public static animate(sso: SmoothScrollOptions);
  public static animate(target: HTMLElement | number, sso?: SmoothScrollOptions);
  public static animate(param1: any, param2?: any) {
    let instance = SmoothScroll.getInstance();

    if(param1.target !== undefined) { //param1 is SSO;
      instance._animate(param1);
    } else if(param2) { // param2 does exist as SSO
      param2.target = param1;
      instance._animate(param2);
    } else {
      instance._animate({target: param1});
    }
  }

  private _animate(sso: SmoothScrollOptions) {
    if(this.isScrolling) { return false; }
    if(sso.target === undefined) { return false; }

    this.isScrolling = true;

    if(!sso.easing) {
      sso.easing = this.defaultOptions.easing;
    }

    if(!sso.duration || sso.duration === 0) {
      sso.duration = this.defaultOptions.duration;
    }

    if(!sso.offset || sso.offset === 0) {
      sso.offset = this.defaultOptions.offset;
    }

    this.options = sso;

    this.startLocation = window.pageYOffset;
    this.endLocation = this.determineEndLocation(sso);
    this.distance = this.endLocation - this.startLocation;
    this.position = this.startLocation;

    this.interval = 16;
    this.timeLapsed = 0;
    this.percentage = 0;
    // console.log(sso);

    this.intervalID = window.setInterval(() => {
      this.processLoop();
    }, this.interval);
  }

  private processLoop() {
    if(this.options.duration <= 10){
      this.options.duration = this.options.duration * 1000;
    }
    this.timeLapsed += this.interval;
    this.percentage = (this.timeLapsed / (this.options.duration));
    this.percentage = (this.percentage > 1) ? 1 : this.percentage;
    let eased = Easing.calculate(this.percentage, this.options.easing);
    this.position = Math.floor(this.startLocation + this.distance * eased);

    window.scroll(0, this.position);

    if(this.percentage === 1) {
      window.clearInterval(this.intervalID);
      this.isScrolling = false;
    }
    // console.log(this.position);
  }

  private determineEndLocation(sso:SmoothScrollOptions):number{
    if(typeof sso.target === "number"){
      return sso.target;
    }else{
      return viewportOffset(sso.target).y - sso.offset;
    }
  }

  private constructor() {
    this.defaultOptions = {
      duration: 1000,
      easing: EasingType.linear,
      offset: 0
    };
  }

}

export interface SmoothScrollOptions {
  target?: HTMLElement | number;
  duration?: number;
  easing?: EasingType;
  offset?: number;
}
