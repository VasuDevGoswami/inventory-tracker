import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemAddComponent } from './pages/item-add/item-add.component';
import {AppRoutingModule} from "./app-routing.module";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemAddComponent,
    DashboardComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
