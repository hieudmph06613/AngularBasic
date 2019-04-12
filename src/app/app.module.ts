import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    ProductDetailComponent,
    AddProductComponent,
    NavComponent,
    JumbotronComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent,
    IndexComponent,

  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
