import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';

import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {SlideComponent} from './components/slide/slide.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        SlideComponent,
        ProductDetailComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        AddProductComponent,
        HeaderComponent,
        FooterComponent,
        ProductListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
