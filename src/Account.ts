export class Account {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public setName(v: string): Account {
    this.name = v;
    return this;
  }

  public setId(id: number): Account {
    this.id = id;
    return this;
  }

  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }
}
