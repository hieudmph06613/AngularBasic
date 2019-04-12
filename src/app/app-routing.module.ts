import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ProductComponent } from './component/product/product.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';

const routes: Routes=[
  {path:'', redirectTo:'/product', pathMatch:'full'},
  {path: 'about', component: AboutComponent},
  {path: 'product', component:ProductComponent},
  {path: 'product/:id',component:ProductDetailComponent},
  {path: '**', component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]

})
export class AppRoutingModule { }
