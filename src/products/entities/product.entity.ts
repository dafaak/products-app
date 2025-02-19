interface UpdateWithOptions {
  name?: string;
  price?: number;
  description?: string;
}

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

  updateWith({ name, price, description }: UpdateWithOptions) {
    this.name = name ?? this.name;
    this.price = price ?? this.price;
    this.description = description ?? this.description;
  }
}
