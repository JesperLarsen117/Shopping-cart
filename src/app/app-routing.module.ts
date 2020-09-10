import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForsideComponent } from './pages/forside/forside.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ThanksComponent } from './pages/thanks/thanks.component';


const routes: Routes = [
  { path: '', component: ForsideComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'Thankyou', component: ThanksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
