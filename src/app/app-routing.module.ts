import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ManagerproductComponent } from './components/managerproduct/managerproduct.component';

const routes:Routes=[
  
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path:'product', component:ProductComponent},
  { path:'contact', component:ContactComponent},
  { path:'manager', component:ManagerproductComponent},
  { path: 'home', component: HomeComponent},
  { path:'add', component:AddproductComponent},
  { path:'product/:id',component:ProductDetailComponent},
  { path:'**', component:NotfoundComponent},
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
