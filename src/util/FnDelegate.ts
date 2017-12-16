export class FnDelegate{
  get context(): any {
    return this._context;
  }
  get fn(): Function {
    return this._fn;
  }

  private _fn:Function;
  private _context:any;
  private _args:any[];
  private argsBefore:any[] = [];
  private argsAfter:any[] = [];

  constructor(fn:Function, context?:any, ...args:any[]){
    this._fn = fn;
    this._context = context;
    this._args = args;
  }

  public execute():any{
    let args = [].concat(this.argsBefore, this._args, this.argsAfter);
    return this._fn.apply(this._context, args);
  }
  public prependArgs(...args:any[]){
    this.argsBefore = args;
  }
  public apendArgs(...args:any[]){
    this.argsAfter = args;
  }

  public destroy(){
    this._fn = null;
    this._context = null;
    this._args = null;
  }
}
