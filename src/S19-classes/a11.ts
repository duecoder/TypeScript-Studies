export class Cart {
  private readonly products: Product[] = [];

  addProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  productQuantity(): number {
    return this.products.length;
  }

  priceSum(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) { }
}

const product1 = new Product('Boné', 120);
const product2 = new Product('Camiseta', 85);
const product3 = new Product('Calça', 100);

const shoppingCart = new Cart();

shoppingCart.addProducts(product1, product2, product3);
console.log(shoppingCart);

console.log(shoppingCart.productQuantity());
console.log(shoppingCart.priceSum());
