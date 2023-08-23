import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrbanServiceService } from 'src/app/services/dec-service.service';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {
temp:any;
items:any;
total:any;
  constructor(private router:Router,private urban:UrbanServiceService) { }

  ngOnInit(): void 
  {
    this.total=this.urban.getPayPrice()
  }

  payNow(){
    
    this.router.navigateByUrl("/sucessful")
    window.alert("Your Payment is completed sucessfully.");
    }
  }

