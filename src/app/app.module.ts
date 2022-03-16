import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemListComponent} from './components/item-list/item-list.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { CategoryOperationComponent } from './components/category-operation/category-operation.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    CategoryListComponent,
    HeaderComponent,
    CategoryOperationComponent,
    ItemAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
