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

  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.items = this.CartService.getItems()
    console.log(this.items);

  }
  deleteItem(itemName) {
    console.log(name);
    this.CartService.subject.subscribe((status) => {
      console.log(status);
      this.items = this.CartService.getItems()
    });
    this.CartService.deleteItem({ name: itemName });

  }

}
