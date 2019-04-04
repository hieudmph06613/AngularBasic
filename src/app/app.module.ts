import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/component/header.component';
import { SidebarComponent } from './sidebar/component/sidebar.component';
import { HomeComponent } from './home/component/home.component';
import { ProductsComponent } from './products/component/products.component';
import { NewsletterComponent } from './newsletter/component/newsletter.component';
import { FooterComponent } from './footer/component/footer.component';
import { CategoryFeatureComponent } from './category-feature/component/category-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent,
    NewsletterComponent,
    FooterComponent,
    CategoryFeatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
