import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  { path: 'product/:id', component: ProductDetailComponent },
  {
    path: 'index', component: IndexComponent
  },
  { path: '**', component: NotFoundComponent }
  
  

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
