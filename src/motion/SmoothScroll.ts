import {Easing, EasingType} from "./Easing";

export class SmoothScroll{
  private static instance:SmoothScroll;

  public isScrolling:boolean = false;

  private defaultOptions:SmoothScrollOptions;
  private options:SmoothScrollOptions;
  private intervalID:number;
  private interval:number;
  private timeLapsed:number;
  private percentage:number;
  private startLocation:number;
  private endLocation:number;
  private distance:number;
  private position;

  public static getInstance():SmoothScroll{
    if(!SmoothScroll.instance){
      SmoothScroll.instance = new SmoothScroll();
    }
    return SmoothScroll.instance;
  }

  public static setDefault(sso:SmoothScrollOptions){
    let instance  = SmoothScroll.getInstance();

    if(sso.duration || sso.duration === 0){
      instance.defaultOptions.duration = sso.duration;
    }
    if(sso.easing){
      instance.defaultOptions.easing = sso.easing;
    }
    if(sso.offset || sso.offset === 0){
      instance.defaultOptions.offset = sso.offset;
    }
  }

  public static animate(sso:SmoothScrollOptions);
  public static animate(target:HTMLElement, sso?:SmoothScrollOptions);
  public static animate(param1:any, param2?:any){
    let instance = SmoothScroll.getInstance();

    if(param1.target !== undefined){ //param1 is SSO;
      instance._animate(param1);
    }else if(param2){ // param2 does exist as SSO
      param2.target = param1;
      instance._animate(param2);
    }else{
      instance._animate({target:param1});
    }
  }

  private _animate(sso:SmoothScrollOptions){
    if(this.isScrolling){ return false; }
    if(!sso.target){ return false; }

    this.isScrolling = true;

    if(!sso.easing){
      sso.easing = this.defaultOptions.easing;
    }

    if(!sso.duration || sso.duration === 0){
      sso.duration = this.defaultOptions.duration;
    }

    if(!sso.offset || sso.offset === 0){
      sso.offset = this.defaultOptions.offset;
    }

    this.options = sso;

    this.startLocation = window.pageYOffset;
    this.endLocation = sso.target.offsetTop - sso.offset;
    this.distance = this.endLocation  - this.startLocation;
    this.position = this.startLocation;

    this.interval = 16;
    this.timeLapsed = 0;
    this.percentage = 0;

    this.intervalID = window.setInterval(() => {
      this.processLoop();
    }, this.interval);
  }

  private processLoop(){
    this.timeLapsed += this.interval;
    this.percentage = (this.timeLapsed / (this.options.duration * 1000));
    this.percentage = (this.percentage > 1) ? 1 : this.percentage;
    let eased = Easing.calculate(this.percentage, this.options.easing);
    this.position = Math.floor(this.startLocation + this.distance * eased);

    window.scroll(0, this.position);

    if(this.percentage === 1){
      window.clearInterval(this.intervalID);
      this.isScrolling = false;
    }
  }

  private constructor(){
    this.defaultOptions = {
      duration:1,
      easing:EasingType.linear,
      offset:0
    };
  }

}

export interface SmoothScrollOptions{
  target?:HTMLElement;
  duration?:number;
  easing?:EasingType;
  offset?:number;
}
