import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cart } from '../classes/cart';
import { ProductCategeory } from '../classes/product-categeory';
import { ProductDetails } from '../classes/product-details';
import { UserDetails } from '../classes/user-details';

@Injectable({
  providedIn: 'root'
})
export class UrbanServiceService {
  getTotalPrice(): number {
    throw new Error('Method not implemented.');
  }

items:ProductDetails[]=[];
price:any;

  cartUrl: string="http://localhost:8080/decathlon/cart"
  productUrl: string="http://localhost:8080/decathlon/product_details"
  user_detailsUrl: string="http://localhost:8080/decathlon/user_details"
  categeoryUrl: string="http://localhost:8080/decathlon/product_categeory"

  constructor(private httpClient: HttpClient) { }

  getAllProductDetails() : Observable<ProductDetails[]>{
    return this.httpClient.get<GetProductDetailResponse>(this.productUrl).
    pipe(map(response=>response._embedded.product_detailses))
  }

  getCart() : Observable<Cart[]>{
    return this.httpClient.get<GetCartResponse>(this.cartUrl).
    pipe(map(Response=>Response._embedded.carts))
  }

  getAllProductCategeory() : Observable<ProductCategeory[]>
  {
   return this.httpClient.get<GetProductCategeoryResponse>(this.categeoryUrl).
   pipe(map(response=>response._embedded.product_categeories))
  }



  getProductsById(p_Id:number):Observable<ProductDetails>
   {
      const productUrl =this.productUrl+"/"+p_Id;
     return this.httpClient.get<ProductDetails>(productUrl);
   }
   
  updateProduct(pdetail:ProductDetails):Observable<ProductDetails>
   {
     const httpOptions=
     {
       headers:new HttpHeaders({
         'content-type':'application/json',
         'Authorization' :'auth-token',
         'Access-Control-Allow-origin':'*'
       })
     };
     return this.httpClient.put<ProductDetails>(this.productUrl+`/${pdetail.p_id}`,pdetail,httpOptions);
   }
  
   deleteProductDetails(pId:number):Observable<ProductDetails>
   {
     const httpOptions=
     {
       headers:new HttpHeaders({
         'content-type':'application/json',
         'Authorization' :'auth-token',
         'Access-Control-Allow-origin':'*'
       })
     };
     return this.httpClient.delete<ProductDetails>(this.productUrl+`/${pId}`,httpOptions);
   }

   saveProduct(pdetail:ProductDetails):Observable<ProductDetails>
   {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.post<ProductDetails>(this.productUrl,pdetail,httpOptions);
   }

   saveCartProduct(pdetail:ProductDetails):Observable<ProductDetails>
   {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.post<ProductDetails>(this.productUrl,pdetail,httpOptions);
   }


   saveUser(user: UserDetails):Observable<UserDetails>
    {
    const httpOptions=
    {
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<UserDetails>(this.user_detailsUrl,user,httpOptions);
    }


    getProductsCategeoryByPcId(pcId:number):Observable<ProductCategeory[]>
    {
      const productByPcIdUrl= "http://localhost:8080/urbanladder/product_details/search/findBypcid?id=" + pcId;
      return this.httpClient.get<GetProductCategeoryResponse>(productByPcIdUrl).
      pipe(map(response=> response._embedded.product_categeories));
     }


   getProductsBySearchName(p_name: string) : Observable<ProductDetails[]>
     {
      const searchUrl="http://localhost:8080/decathlon/product_details/search/findBypname?p_name="+p_name;
        return this.httpClient.get<GetSearchByPname>(searchUrl).
        pipe(map(response=>response._embedded.product_detailses));
    }

    AddToCart(pdetail:ProductDetails){
this.items.push(pdetail);
//this.getTotalPrice();
    }

    setPayPrice(price:any){
      this.price=price;
      console.log(this.price);
    }

    getPayPrice(){
      console.log(this.price);
      return this.price;
    }

    getItems() {
      return this.items;
    }



removeAllcart(){
  this.items=[]
}

  }


  
  interface GetProductDetailResponse{
    _embedded : {
      product_detailses : ProductDetails[]
    }
  }

  interface GetCartResponse{
    _embedded : {
      carts:Cart[]
  }
  }
  
  interface GetSearchByPname{
    _embedded:{
      product_detailses : ProductDetails[]
    }
  }
  
  interface GetProductCategeoryResponse{
    _embedded : {
      product_categeories : ProductCategeory[]
    }
  }

