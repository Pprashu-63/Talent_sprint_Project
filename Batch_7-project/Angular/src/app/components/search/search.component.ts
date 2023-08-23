import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrbanServiceService } from 'src/app/services/dec-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchName:string;

  constructor(public urban:UrbanServiceService, public router : Router, 
    public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

 search()
  {  
    this.router.navigateByUrl("/search/"+this.searchName);
  }
  

}
