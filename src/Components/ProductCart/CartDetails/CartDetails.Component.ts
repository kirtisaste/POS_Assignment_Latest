import { Component } from "@angular/core";
import { CartService } from "../../../Services/cart.service";

@Component({
    selector: 'app-cartdetails',
    templateUrl: './CartDetails.Component.html',
    styleUrls: ['./CartDetails.Component.css']
  })
  export class CartDetailsComponent {
    totalAmt = 0;
    totalQty = 0; 
    vatTax = 0;
    afterDiscount = 0;
    grandTotal = 0;
   constructor(private cartService : CartService){
      this.cartService.cartSummery$.subscribe(res =>{
        if(res) {
          console.log(res)
        //let cartDetails = JSON.parse(res);
        this.totalAmt = res.TotalAmount;
        this.totalQty = res.TotalQuantity;
        this.vatTax = (10/100 ) * this.totalAmt;
        this.afterDiscount = (10/100 ) * this.totalAmt;
          this.grandTotal = (this.totalAmt + this.vatTax) - this.afterDiscount;
        }
      });
        
   }
  }