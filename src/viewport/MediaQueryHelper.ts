import {Dispatchable} from "../event/Dispatchable";
import {MediaQueryEvent} from "./MediaQueryEvent";

export class MediaQueryHelper extends Dispatchable {
  private static instance: MediaQueryHelper;

  private mqCollection: MediaQueryList[] = [];
  private currentMQ: MediaQueryList;

  public static getInstance(): MediaQueryHelper {
    if(!MediaQueryHelper.instance) {
      MediaQueryHelper.instance = new MediaQueryHelper();
    }
    return MediaQueryHelper.instance;
  }

  public get currentMQIndex(): number {
    let collection = this.mqCollection,
      index = collection.indexOf(this.currentMQ);
    if(index === -1) {
      index = collection.length;
    }
    return index;
  }

  public init(...nums: number[]) {
    nums = nums.sort((a, b) => {
      return a - b;
    });

    nums.forEach((elm) => {
      let mq: MediaQueryList = window.matchMedia(`(max-width:${elm}px)`);
      mq.addListener((e) => {
        this.onMatchMQ(e);
      });
      this.mqCollection.push(mq);
    });

    this.processMQ();

    return this;
  }

  private onMatchMQ(mq: MediaQueryList) {
    this.processMQ();
  }

  private processMQ() {
    let collection = this.mqCollection,
      mq: MediaQueryList;
    this.currentMQ = null;
    for(let i = 0; i < collection.length; i++) {
      mq = collection[i];
      if(mq.matches) {
        this.currentMQ = mq;
        break;
      }
    }
    //console.log(this.currentMQIndex);
    this.dispatch(MediaQueryEvent.ON_MEDIA_QUERY);
  }
}
