import Parent from "./Parent";

export default class Son extends Parent {
  get _id() {
    return this.id;
  }
}
