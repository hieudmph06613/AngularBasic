import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CarServicesComponent } from './components/car-services/car-services.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeProductComponent } from './components/home-product/home-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProductComponent,
    FooterComponent,
    ProductDetailComponent,
    AddProductComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent,
    CarServicesComponent,
    NewsComponent,
    ContactComponent,
    HomeProductComponent,
    AdminComponent,
    HomeNewsComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
