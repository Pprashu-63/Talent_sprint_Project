import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from 'src/app/classes/product-details';
import { UrbanServiceService } from 'src/app/services/dec-service.service';

@Component({
  selector: 'app-product-user-list',
  templateUrl: './product-user-list.component.html',
  styleUrls: ['./product-user-list.component.css']
})
export class ProductUserListComponent implements OnInit {
  items = this.urban.getItems();
  total:any;
  temp:any;

  public grandtotal !:number;

  searchName:string;
  productdetails:ProductDetails[];
  pId: ProductDetails;

  

  constructor(
     private router:Router,
     private activeRoute:ActivatedRoute,
    public urban:UrbanServiceService
  ) { }

  ngOnInit(): void {
   this.activeRoute.paramMap.subscribe(()=>{
      this.getAllProductDetails() });

      this.temp=0;
      for (let price of this.items){

        this.temp+=price.price;
      }
      this.total=this.temp;
      this.urban.setPayPrice(this.total);

      console.log(this.total);

    // this.grandtotal=this.urban.getTotalPrice();
     

  }

  getProductsById() 
  {
    const pId=+this.activeRoute.snapshot.paramMap.get("pId");
    if(pId>0)
    {
      this.urban.getProductsById(pId).subscribe(data => {this.pId=data});
      
    }
  }

  buyNow(){
    this.router.navigateByUrl("/paymentform");
  }

  
  shopMore(){
    this.router.navigateByUrl("/carts");
  }

 


   getAllProductDetails() {
      const hassearchName:boolean = this.activeRoute.snapshot.paramMap.has("pname");
      if(hassearchName)
       {
     
         this.searchName=this.activeRoute.snapshot.paramMap.get("pname");
         console.log(this.searchName);
         this.urban.getProductsBySearchName(this.searchName).subscribe(data=>{
             console.log(data);
           this.productdetails=data;
         });
       
       }
       else{

      this.urban.getAllProductDetails().subscribe(data => {
        console.log(data);
    
        this.productdetails = data;
      });
      }
}
}

