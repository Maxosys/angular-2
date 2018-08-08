import { Component,OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { appService} from '../app.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
  
})
export class HomeComponent implements OnInit {
		
		profile = {};

		constructor(private http: Http, private _appService: appService){}

		 ngOnInit() {

	
		 		
		 }
  
}