import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './Product.Component.html',
    styleUrls: ['./Product.Component.css']
  })
  export class Productomponent {
    @Input() name ="";
     
  }