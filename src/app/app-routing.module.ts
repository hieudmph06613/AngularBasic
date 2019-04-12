import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProducDetailComponent } from './component/product/produc-detail/produc-detail.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { BlogComponent } from './component/blog/blog.component';

const routes : Routes=[
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'product/:id', component:ProducDetailComponent},
  {path:'blog', component:BlogComponent},
  {path: '**', component:NotFoundComponent}
];
@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
