export enum EasingType {
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  linear
}

// https://gist.github.com/gre/1650294#gistcomment-1806616
export class Easing {
  public static getEased(from: number, to: number, current: number, type: EasingType): number {
    let progress = (current - from) / (to - from);
    return Easing.calculate(progress, type);
  }

  public static calculate(val: number, type: EasingType = EasingType.linear): number {
    if(val <= 0) {
      return 0;
    } else if(val >= 1) {
      return 1;
    }

    let result: number = 0;
    switch(type) {
      case EasingType.easeInQuad:
        result = Easing.EaseIn(2, val);
        break;
      case EasingType.easeOutQuad:
        result = Easing.EaseOut(2, val);
        break;
      case EasingType.easeInOutQuad:
        result = Easing.EaseInOut(2, val);
        break;
      case EasingType.easeInCubic:
        result = Easing.EaseIn(3, val);
        break;
      case EasingType.easeOutCubic:
        result = Easing.EaseOut(3, val);
        break;
      case EasingType.easeInOutCubic:
        result = Easing.EaseInOut(3, val);
        break;
      case EasingType.easeInQuart:
        result = Easing.EaseIn(4, val);
        break;
      case EasingType.easeOutQuart:
        result = Easing.EaseOut(4, val);
        break;
      case EasingType.easeInOutQuart:
        result = Easing.EaseInOut(4, val);
        break;
      case EasingType.easeInQuint:
        result = Easing.EaseIn(5, val);
        break;
      case EasingType.easeOutQuint:
        result = Easing.EaseOut(5, val);
        break;
      case EasingType.easeInOutQuint:
        result = Easing.EaseInOut(5, val);
        break;
      default:
        result = val;
    }
    return result;
  }

  private static EaseIn(power, t) {
    return Math.pow(t, power);
  }

  private static EaseOut(power, t) {
    return 1 - Math.abs(Math.pow(t - 1, power));
  }

  private static EaseInOut(power, t) {
    return t < .5 ? Easing.EaseIn(power, t * 2) / 2 : Easing.EaseOut(power, t * 2 - 1) / 2 + 0.5;
  }
}
