import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  items: any;
  totalPrice: number = 0
  moms: number;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.items = this.CartService.getItems()
    console.log(this.items);
    for (const item of this.CartService.getItems()) {
      const totalAmount = +item.product.price * item.quantity;
      this.totalPrice = this.totalPrice + totalAmount;
    }
    this.moms = this.totalPrice * 0.25;
    console.log(this.moms);

    this.CartService.subject.subscribe((status) => {
      this.moms = this.totalPrice * 0.25;

      for (const item of this.CartService.getItems()) {
        const totalAmount = +item.product.price * item.quantity;
        this.totalPrice = this.totalPrice + totalAmount;
      }

    });

  }
  deleteItem(itemName) {
    console.log(name);
    this.CartService.subject.subscribe((status) => {
      console.log(status);
      this.items = this.CartService.getItems()
    });
    this.CartService.deleteItem({ name: itemName });
  }

  changePlusQuantity(itemName) {
    this.CartService.subject.subscribe((status) => {
      console.log(status);
      this.items = this.CartService.getItems()
      console.log(this.items);

    });
    this.CartService.addQty(itemName)
  }
  changeMinusQuantity(itemName) {
    this.CartService.subject.subscribe((status) => {
      console.log(status);
      this.items = this.CartService.getItems()
      console.log(this.items);

    });
    this.CartService.subtractQty(itemName)
  }

}
