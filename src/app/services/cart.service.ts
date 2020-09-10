import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject = new Subject<any>();

  product: any;
  items: any;

  constructor() { }
  ngOnInit() {

  }
  addToCart(product) {
    let local_storage;
    let itemsInCart = []
    this.items = {
      product: product,
      quantity: 1,
    }
    if (localStorage.getItem('cart') == null) {
      local_storage = [];
      itemsInCart.push(this.items);
      localStorage.setItem('cart', JSON.stringify(itemsInCart));
      this.subject.next('changed');

    }
    else {
      local_storage = JSON.parse(localStorage.getItem('cart'));
      for (var i in local_storage) {
        if (this.items.product.id == local_storage[i].product.id) {
          local_storage[i].quantity += 1;
          this.items = null;
          break;
        }
      }
      if (this.items) {
        itemsInCart.push(this.items);
      }
      local_storage.forEach(function (item) {
        itemsInCart.push(item);
      })
      localStorage.setItem('cart', JSON.stringify(itemsInCart));
      this.subject.next('changed');


    }
  }
  getItems() {
    return this.items = JSON.parse(localStorage.getItem('cart'));
  }
  deleteItem(item) {
    item = item;
    console.log(item);

    let shopping_cart;
    let index;
    shopping_cart = JSON.parse(localStorage.getItem('cart'));
    for (let i in shopping_cart) {
      if (item.name == shopping_cart[i].product.name) {
        index = i;
      }
    }
    shopping_cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(shopping_cart));
    this.subject.next('changed');


  }
  addQty(item) {
    item = item;
    let shopping_cart;
    shopping_cart = JSON.parse(localStorage.getItem('cart'));
    for (let i in shopping_cart) {
      if (item.product.name == shopping_cart[i].product.name) {
        shopping_cart[i].quantity += 1;
        item = null;
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(shopping_cart));
    this.subject.next('changed');


  }
  numberOfItems() {
    let itemsInCart = JSON.parse(localStorage.getItem('cart'));
    return itemsInCart.length;
  }

}
