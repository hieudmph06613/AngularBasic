import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule} from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ManagerProdcutComponent } from './manager-prodcut/manager-prodcut.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProductComponent,
    FooterComponent,
    ProductDetailComponent,
    AddProductComponent,
    AboutComponent,
    NotfoundComponent,
    EditProductComponent,
    ManagerProdcutComponent,
    SlideComponent
    
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
