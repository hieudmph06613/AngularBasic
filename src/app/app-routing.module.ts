import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../app/components/about/about.component';
import { ProductComponent } from '../app/components/product/product.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';
import { ContentComponent } from '../app/components/content/content.component';
import { HomeComponent } from '../app/components/home/home.component';
import { CarServicesComponent } from '../app/components/car-services/car-services.component';
import { NewsComponent } from './components/news/news.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeProductComponent } from './components/home-product/home-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'content', component: ContentComponent },
  { path: 'product/page/1', component: HomeProductComponent },
  { path: 'services', component: CarServicesComponent },
  { path: 'news', component: HomeNewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    children: [
      { path: '**', component: NotFoundComponent}
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
