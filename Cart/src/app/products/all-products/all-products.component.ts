import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
allproducts: any=[]; //array of data // product

constructor(private api:ApiService, private cart:CartService){}

searchTerm:string='';

ngOnInit():void{
  this.api.getallproducts().subscribe(
    (data:any)=>{
      this.allproducts = data.products;
    }
  )

  this.api.searchKey.subscribe(
    (data:any)=>{
      this.searchTerm = data
    }
  )
}

addtowishlist(product:any){
  this.api.addtowishlist(product).subscribe(
    (result:any)=>{
      alert(result.message)
    },
    (result:any)=>{
      alert(result.error.message)
    }
  )
}
addtocart(product:any){
  this.cart.addtocart(product)
}
}


















// addtowishlist(product:any){
//   this.api.addtowishlist(product).subscribe{
//     (result:any)=>{
//       alert(result.message)//true
//     },
//     (result:any)=>{
//       alert(result.error.message)//false
//     }
//   }
// }