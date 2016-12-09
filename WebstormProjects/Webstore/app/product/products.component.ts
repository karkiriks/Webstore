import {Component, OnInit} from "@angular/core";
import {ProductService} from "./product.service";
import {Product} from "./product";
/**
 * Created by RIKS on 12/7/16.
 */


@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html',
  styleUrls: [`products.component.css`],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    this.getProducts();
  }

  title = 'List of Products';
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) {
  }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.productService.create(name)
      .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
      });
  }

  delete(product: Product): void {
    this.productService
      .delete(product.id)
      .then(() => {
        this.products = this.products.filter(p => p !== product);
        if (this.selectedProduct === product) {
          this.selectedProduct = null;
        }
      });
  }

}
