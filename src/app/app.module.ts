import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForsideComponent } from './pages/forside/forside.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './pages/card/card.component';
import { CartComponent } from './partial/cart/cart.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    CardComponent,
    CartComponent,
    ShoppingCartComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
