import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as UuidV4 } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 'f89e9379-71c6-4994-8813-7c63e99b0ecf',
      name: 'iPhone 13',
      price: 799,
      description: 'Latest model with A15 Bionic chip',
    },
    {
      id: '1a9d0a9f-8c43-4faf-8acb-c53e6a02240c',
      name: 'MacBook Pro',
      price: 1299,
      description: '16-inch, M1 Pro chip',
    },
    {
      id: 'aa60a4a2-dd62-46b0-8f04-00ca740e88d8',
      name: 'iPad Pro',
      price: 999,
      description: '12.9-inch, M1 chip',
    },
    {
      id: 'b5d4179c-d7b1-485c-ba06-4e18e01aa0fe',
      name: 'Apple Watch Series 7',
      price: 399,
      description: '45mm, GPS + Cellular',
    },
    {
      id: '32c64e71-1108-4eb4-8154-645b5dd82c5a',
      name: 'AirPods Pro',
      price: 249,
      description: 'Active Noise Cancellation',
    },
  ];

  create(createProductDto: CreateProductDto) {
    const { name, description, price } = createProductDto;
    const newProduct = new Product(UuidV4(), name, price, description);
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.products.find((prod) => prod.id === id);
    if (!product)
      throw new NotFoundException(`Product whit id ${id} not found`);
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: string): Product {
    const product = this.findOne(id);

    this.products = this.products.filter((prod) => prod.id !== id);

    return product;
  }
}
