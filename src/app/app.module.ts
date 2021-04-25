import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './page/product-add/product-add.component';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductEditorComponent,
    ProductAddComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
