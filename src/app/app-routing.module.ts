import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ManageComponent } from './components/manage/manage.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'products', component: ProductComponent },
  { path: 'product/:id', component: ProductdetailComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }