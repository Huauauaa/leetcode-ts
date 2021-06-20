import { Harvey } from './Harvey';

export class Martin extends Harvey {
  public introduce(): string;
  public introduce(name: string): string;

  introduce(name?: string): string {
    if (name === undefined) {
      return super.introduce();
    } else {
      console.log(`I am ${name} Hua`);
      const msg = `I am ${name} Hua`;
      return msg;
    }
  }
}
