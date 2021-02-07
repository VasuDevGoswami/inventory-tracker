import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {ItemAddComponent} from "./pages/item-add/item-add.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ItemDetailComponent} from "./pages/item-detail/item-detail.component";

const routes: Route[] = [
  {path: '', component: DashboardComponent},
  {path: 'item-add', component: ItemAddComponent},
  {path: 'item-detail/:id', component: ItemDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
