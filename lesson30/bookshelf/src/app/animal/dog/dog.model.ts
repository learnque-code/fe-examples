import {DogMaster} from "./dog-master.model";

export class Dog {
  public name: string | null = null;
  public age?: number | null = null;
  public type?: string | null = null;
  public masters: DogMaster[] = [];
}
