import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import{ AboutComponent } from '../app/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewComponent } from './new/new.component';
const routes : Routes=[
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component :AboutComponent},
  {path :'new', component: NewComponent},
  {path:'product', component:ProductComponent},
  {path:'product/:id', component:ProductDetailComponent},
  {path:'**', component :NotFoundComponent}
  
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
