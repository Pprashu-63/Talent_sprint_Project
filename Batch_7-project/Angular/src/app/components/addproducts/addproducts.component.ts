import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from 'src/app/classes/product-details';
import { UrbanServiceService } from 'src/app/services/dec-service.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit
 {
   pdetail :ProductDetails = new ProductDetails (0,"","",0,0,"",0);
 
  constructor(
    private urban:UrbanServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute ) { }
    editable : boolean=false;

  ngOnInit(): void 
  {
//this.getProductsById();
this.activatedRoute.paramMap.subscribe( ()=> {this.getProductsById()});

  }

  getProductsById() 
  {
    const pId=+this.activatedRoute.snapshot.paramMap.get("pId");
    if(pId>0)
    {
      this.editable=true;
      this.urban.getProductsById(pId).subscribe(data => {this.pdetail=data});
      
    }
  }

  onSubmit()
  {
    if(this.editable)
    {
      this.urban.updateProduct(this.pdetail).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/products"); 
    }
    else{
    console.log(this.pdetail);
    this.urban.saveProduct(this.pdetail).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/products");
    }
  }

}
