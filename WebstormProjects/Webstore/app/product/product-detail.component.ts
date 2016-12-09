import {Component, Input, EventEmitter, Output, OnInit} from "@angular/core";
import {Product} from "./product";
import {ProductService} from "./product.service";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params} from "@angular/router";
/**
 * Created by user on 11/30/2016.
 */

@Component({
  moduleId: module.id,
  selector: 'my-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: [`product-detail.component.css`]
})
export class ProductDetailComponent implements OnInit{
  @Input()
  product: Product;

  @Output()
  deleteRequest = new EventEmitter<Product>();

  constructor(private productService: ProductService,
  private location: Location,
  private route: ActivatedRoute){}

  delete() {
    this.deleteRequest.emit(this.product);
  }

  save(): void {
    this.productService.update(this.product)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }

}
