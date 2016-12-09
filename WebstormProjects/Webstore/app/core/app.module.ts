import '../rxjs-extensions';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductDetailComponent} from "../product/product-detail.component";
import {ProductComponent} from "../product/products.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ProductService} from "../product/product.service";
import {AppRoutingModule} from "./app.routing.module";
import {ProductRoutingModule} from "../product/product.routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../in-memory-data-service";
import {DashboardRoutingModule} from "../dashboard/dashboard.routing.module";
import {ProductSearchComponent} from "../product/product-search.component";
import {ProductSearchService} from "../product/product-search.service";


@NgModule({
  imports: [BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductRoutingModule,
    DashboardRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [AppComponent,
    ProductDetailComponent,
    ProductComponent,
    DashboardComponent,
    ProductSearchComponent
    ],
  providers: [ProductService,
  ProductSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
