import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
[x: string]: any;
wishlist: any;
eMsg:any;

  


constructor(private api:ApiService, private router:Router, private cart:CartService) { }

ngOnInit():void{
  this.api.getwishlist().subscribe(
    (data:any)=>{
      this.wishlist = data.products
      if(this.wishlist.length==0){
        this.eMsg="Empty wishlist"
      }
    },
    (data:any)=>{ //client error
      this.eMsg=data.error.message
    }

  )

}


deletewish(product:any){
  this.api.deletewish(product.id).subscribe(
    (result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('wishlist') //automatic refresh
      this.wishlist=result.wishlist
      if(this.wishlist.length==0){
        this.eMsg="Empty wishlist"
      }
    }
  )
  }

  addtocart(product:any){
    this.cart.addtocart(product)
    this.deletewish(product)
  }

}
