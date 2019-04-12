import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router'
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ManagerProdcutComponent } from './manager-prodcut/manager-prodcut.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes : Routes = [
  // {path: '',redirectTo : '/product' , pathMatch : 'full'},
  {path: 'about' , component : AboutComponent},
  {path:'product',component: ProductComponent},
  {path:'addproduct',component : AddProductComponent},
  {path:'product/:id',component : ProductDetailComponent},
  {path:'edit-product/:id',component: EditProductComponent},
  {path:'manager-product',component: ManagerProdcutComponent},
  {path:'**',component : NotfoundComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
