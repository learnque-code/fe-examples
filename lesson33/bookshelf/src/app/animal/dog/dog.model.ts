import {DogMaster} from "./dog-master.model";

export class Dog {
  public name?: string | null = null;
  public age?: number | null = null;
  public type?: string | null = null;
  public masters?: DogMaster[] = [];
  public breeds?: { [key:string]: string | number | {} }[] = [{}];
  public id?: string = '';
  public url?: string = '';
  public width?: number = 0;
  public height?: number = 0;
}
