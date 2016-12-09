import {Routes, RouterModule} from "@angular/router";
/**
 * Created by RIKS on 12/7/16.
 */
import {NgModule} from "@angular/core";
import {ProductComponent} from "./products.component";
import {ProductDetailComponent} from "./product-detail.component";

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule {

}
