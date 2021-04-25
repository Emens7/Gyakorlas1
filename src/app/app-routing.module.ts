import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'editor/:id',
    component: ProductEditorComponent,
  },
  {
    path: 'add',
    component: ProductAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
