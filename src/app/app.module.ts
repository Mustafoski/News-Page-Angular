import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './home/jumbotron/jumbotron.component';
import { HeadlinesComponent } from './home/headlines/headlines.component';
import { NewsComponent } from './home/news/news.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { InputComponent } from './shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    JumbotronComponent,
    HeadlinesComponent,
    NewsComponent,
    ProductDetailComponent,
    ContactComponent,
    AboutComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
