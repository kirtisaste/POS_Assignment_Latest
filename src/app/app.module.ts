import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCartComponent } from '../Components/ProductCart/ProductCart.Component';
import { CartItemComponent } from '../Components/ProductCart/CartItem/CartItem.Component';
import { CartDetailsComponent } from '../Components/ProductCart/CartDetails/CartDetails.Component';
import { Productomponent } from '../Components/Products/Product/Product.Component';
import { Productsomponent } from '../Components/Products/Products.Component';
import { CartService } from '../Services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCartComponent,
    CartItemComponent,
    CartDetailsComponent,
    Productomponent,
    Productsomponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
