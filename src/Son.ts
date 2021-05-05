import Parent from "./Parent";

export default class Son extends Parent {
  get myId() {
    return this.id;
  }
}
