import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('id') id;
  @Input('title') title;
  @Input('teaser') teaser;
  @Input('image') image;
  @Input('price') price;
  constructor(private CartService: CartService) {

  }
  ngOnInit() {

  }
  addToCart(product) {
    this.CartService.addToCart(product);
  }
}
