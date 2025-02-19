export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description?: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    if (description) this.description = description;
  }
}
