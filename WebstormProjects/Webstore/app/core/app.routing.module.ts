import {Routes, RouterModule} from "@angular/router";
/**
 * Created by RIKS on 12/7/16.
 */
import {DashboardComponent} from "../dashboard/dashboard.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
