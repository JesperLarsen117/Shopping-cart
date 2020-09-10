import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private CartServicve: CartService) { }
  items: any;
  quantity: number = 0;
  ngOnInit(): void {
    this.CartServicve.subject.subscribe((status) => {
      let quantityNotCalculated = 0;
      this.items = this.CartServicve.getItems();
      console.log(this.CartServicve.getItems());
      for (const item of this.CartServicve.getItems()) {
        quantityNotCalculated = quantityNotCalculated + item.quantity

      }
      this.quantity = quantityNotCalculated;
    });
    for (const item of this.CartServicve.getItems()) {
      console.log(item.quantity);
      this.quantity = this.quantity + item.quantity
    }
  }

}
