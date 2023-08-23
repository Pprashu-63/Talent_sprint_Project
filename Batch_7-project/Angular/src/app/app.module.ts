import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductDetailsListComponent } from './components/product-details-list/product-details-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShopnowComponent } from './components/shopnow/shopnow.component';
import { ProductUserListComponent } from './components/addtocart/product-user-list.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { PaymentformComponent } from './components/paymentform/paymentform.component';
import { SucessfulComponent } from './components/sucessful/sucessful.component';
import { ProductcategeoryComponent } from './components/productcategeory/productcategeory.component';
import { AboutComponent } from './about/about.component';


const routes :Routes = [
  {path : "",component:WelcomeComponent},
  {path : 'shopnow',component:ShopnowComponent},
  {path : 'addproducts',component:AddproductsComponent},
  {path : 'editdetails/:pId',component:AddproductsComponent},
  {path : 'products',component:ProductDetailsListComponent },
  {path : 'register',component:RegisterComponent},
  {path : 'login',component:LoginComponent},
  {path : 'search/:pname',component:CartListComponent},
  {path : 'carts',component:CartListComponent},
  {path : 'paymentform',component:PaymentformComponent},
  {path : 'addtocart',component:ProductUserListComponent},
  {path : 'sucessful',component:SucessfulComponent},
  {path : 'categeory/:pcId',component:CartListComponent},
  {path : 'about',component:AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsListComponent,
    WelcomeComponent,
    SearchComponent,
    ShopnowComponent,
    ProductUserListComponent,
    AddproductsComponent,
    LoginComponent,
    RegisterComponent,
    CartListComponent,
    PaymentformComponent,
    SucessfulComponent,
    ProductcategeoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
