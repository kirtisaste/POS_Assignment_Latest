import { Component } from "@angular/core";
import { CartService } from "../../Services/cart.service";

@Component({
    selector: 'app-products',
    templateUrl: './Products.Component.html',
    styleUrls: ['./Products.Component.css']
  })
  export class Productsomponent {
    
    constructor(private cartService :CartService){
        console.log(this.products)
    }

    public products = [
        {
            name : "COMPUTER",
            price: 45000,
            color: "#FF5252"
        },
        {
            name: "CAVIAR",
            price: 23000,
            color: "#009688"
        },
        {
            name : "SWEATER",
            price: 2200,
            color: "#69F0AE"
        },
        {
            name: "TIE",
            price: 450,
            color: "#E040FB"
        },
        {
            name : "JACKET",
            price: 900,
            color: "#CDDC39"
        },
        {
            name: "JACKET MEN",
            price: 3300,
            color: "#40C4FF"
        },
        {
            name: "GRAPES",
            price: 60,
            color: "#E040FB"
        },
        {
            name : "ORANGE",
            price: 250,
            color: "#CDDC39"
        },
        {
            name: "KIWI",
            price: 120,
            color: "#40C4FF"
        },
        {
            name: "MOUSE",
            price: 606,
            color: "#009688"
        },
        {
            name : "NOTEBOOK",
            price: 50,
            color: "#69F0AE"
        },
        {
            name: "CLOTHING",
            price: 2000,
            color: "#009688"
        }

    ];

    addItemInCart(item: any){
        this.cartService.addItemToCart(item);
    }
  }

  