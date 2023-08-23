import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/classes/user-details';
import { UrbanServiceService } from 'src/app/services/dec-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserDetails = new UserDetails  (0,"first","KP","batch7@gmail.com",123456789,"1234567","user");
  constructor(private router:Router,private urban: UrbanServiceService) { }

  ngOnInit(): void {
  }

  onLogin():void
  {
    console.log(this.user.email);
    // this.user.usertype=="admin"&&
      if( this.user.password=="admin"&& this.user.email=="admin@gmail.com")
      {
      this.router.navigateByUrl("/products");//crud operations
      console.log("admin verified");
      window.alert("login successfull");
      }
      else if(this.user.password=="sai"&& this.user.email=="sailatha.k@talentsprint.com")
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="sailatha"&& this.user.email=="sailatha@gmail.com")
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="vikas"&& this.user.email=="vikas@gmail.com")
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="sanjay"&& this.user.email=="sanjay@gmail.com")
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="suha"&& this.user.email=="suhayamini@gmail.com")
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="robin"&& this.user.email=="robin@gmail.com")
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="pruthvi"&& this.user.email=="pruthvi@gmail.com")
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="indira"&& this.user.email=="indira@gmail.com")
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="pasha"&& this.user.email=="pasha@gmail.com")
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="xyz"&&this.user.email=="xyz@gmail.com"){
        this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="abc"&&this.user.email=="abc@gmail.com")
      {
        this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
      else if(this.user.password=="keerthi"&&this.user.email=="keerthi@gmail.com")
      {
        this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }

      else if(this.user.usertype=="user" )
      {
      this.router.navigateByUrl("/carts");//display code
      console.log("user verified");
     window.alert("login successfull");
      }
      else{
        this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
    }
}
