import { Component } from "@angular/core";
import { Cart } from "../../../Objects/cart.model";
import { CartService } from "../../../Services/cart.service";

@Component({
    selector: 'app-cartitem',
    templateUrl: './CartItem.Component.html',
    styleUrls: ['./CartItem.Component.css']
  })
  export class CartItemComponent {
   
   cartItems : Array<Cart> = [];

   constructor(private cartService :CartService) {

      this.cartService.afterItemAddClick$.subscribe((res) => {
         if(res) {

            if(this.cartItems.find(x => x.Product === res.name)){
               let index = this.cartItems.findIndex(a=> a.Product === res.name);
               this.cartItems[index].Quantity = Number(this.cartItems[index].Quantity) + 1;
               this.cartItems[index].Total = Number(this.cartItems[index].Quantity) * Number(this.cartItems[index].Price);
            } else {
               this.cartItems.push({
                  Product: res.name,
                  Price: res.price,
                  Quantity: 1,
                  Total: res.price
               })
            }
            this.carTotal() 
         }  
      })
    }

    addItem(index: number) {
      this.cartItems[index].Quantity = Number(this.cartItems[index].Quantity ?? 0) + 1;
      this.cartItems[index].Total = Number(this.cartItems[index].Price) * Number(this.cartItems[index].Quantity);
         this.carTotal()   
     }
    
     removeItem(index: number) {
      if(Number(this.cartItems[index].Quantity) > 1) {
         this.cartItems[index].Quantity = Number(this.cartItems[index].Quantity ?? 0) - 1;
         this.cartItems[index].Total = Number(this.cartItems[index].Price) * Number(this.cartItems[index].Quantity);
         this.carTotal() 
      }
     }
    
     deleteItem(index: number) {
      this.cartItems.splice(index,1);
      this.carTotal() 
     }

     carTotal(){
      let totalItem : number = 0;
            let totalAmt :number = 0;
            this.cartItems.forEach(element => {
               totalItem += Number(element.Quantity);
               totalAmt += Number(element.Total);
            });

            this.cartService.updateCartSummery({ "TotalAmount": totalAmt, "TotalQuantity":totalItem});
     }

  }