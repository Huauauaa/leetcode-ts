import { Harvey } from './Harvey';

export class Martin extends Harvey {
  public introduce(): void;
  public introduce(name: string): void;

  introduce(name?: string): void {
    if (name === undefined) {
      super.introduce();
    } else {
      console.log(`I am ${name} Hua`);
    }
  }
}
