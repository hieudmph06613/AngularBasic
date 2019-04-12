import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import {AddProductComponent} from './component/product/add-product/add-product.component'
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './component/about/about.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ProductComponent,
    ProductDetailComponent,
    AddProductComponent,
    AboutComponent,
    NotFoundComponent,
  
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
