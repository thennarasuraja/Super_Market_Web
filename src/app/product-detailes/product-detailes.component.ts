import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css'
})
export class ProductDetailesComponent {
  allproduct:ProductInfo[]=[]
  Addproduct=false
  constructor(private router:Router){

  } 

  navigato(){
    this.router.navigate(['/buyproduct'])

  }
  


}
class ProductInfo{
  productId=0 as number
  productName= '' as string
  productQuantity= '' as string
  Department= '' as string
  price=0  as number

}
