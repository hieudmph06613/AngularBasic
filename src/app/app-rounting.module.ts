import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';


const routes : Routes =[
  {path : '', redirectTo: '/home', pathMatch:'full'},
  {path :'home', component: HomeComponent},
  {path: 'product', component:ProductComponent},
  {path: 'product/:id',component: ProductDetailComponent},
  {path: '**', component:NotFoundComponent}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRountingModule { }
