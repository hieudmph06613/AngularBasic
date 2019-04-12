import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { FormComponent } from './component/form/form.component';
import { AddComponent } from './component/add/add.component';
import { AppRountingModule } from './app-rounting.module';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    ProductDetailComponent,
    FormComponent,
    AddComponent,
    NotFoundComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRountingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
