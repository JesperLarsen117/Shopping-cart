import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { promise } from 'protractor';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {
  products: object;
  constructor(private http: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.http.getProducts().toPromise();
    console.log(this.products);

  }

}
