import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path:'products', component:AllProductsComponent },       //path for all-products-4200
  { path: 'cart', component: CartComponent },          //path for cart-4200/cart
  { path: 'wishlist', component: WishlistComponent }   //path for wishlist-4200/wishlist

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
