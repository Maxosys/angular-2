import { Component,OnInit,AfterViewInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import {Http, Response} from '@angular/http'
import { appService} from './app.service'; 
import {NgForm} from '@angular/forms';


declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [appService]
})

export class AppComponent implements OnInit ,AfterViewInit {
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _appService: appService,

  ) {}


  myInsert(useremailid, userskypeid, usersmessage) {

		  $("#signupalert").hide();

  		var st = true;

  		if($("#useremailid").val()=="" )
  		{
  			$("#useremailid").css("border","1px solid red");  			
  			st = false;  	
  		}
  		else
  		{
  			$("#useremailid").css("border","1px solid #ccc");
  		}

  		if($("#userskypeid").val()=="")
  		{
  			$("#userskypeid").css("border","1px solid red");  			
  			st = false;  	
  		}
  		else
  		{
  			$("#userskypeid").css("border","1px solid #ccc");
  		}
  		
  		if(st)
  		{
		    if(this._appService.insertData(useremailid, userskypeid, usersmessage))
		    
		    $("#signupalert").text("Data Inserted Successfully");
		    $("#signupalert").show();		    
		}
  }



 ngOnInit() {
  this.router.events
    .subscribe((event) => {
 

      var title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');   

         
      this.titleService.setTitle(title);


       if (event instanceof NavigationEnd) {
        console.log(event.url);
         
        console.log(event.url);

         if(event.url=="/"){
           //setTimeout(function(){  $("#rerequest_quote").click(); }, 12000);
            $('.banner').removeClass('inner-banner');
          }
          else
          {
            if(event.url=="/career")
            {
                 $('.player').hide();
                 $('.banner').addClass('inner-banner');
            }
            else
            {
    			//setTimeout(function(){  $("#rerequest_quote").click(); document.cookie = 'requestqclose=yes'; }, 12000);
                $('.player').hide();
                $('.banner').addClass('inner-banner');
                

                //alert(document.cookie);
            }
          }
     }

    });
}

ngAfterViewInit () {
            !function(d,s,id){
                var js: any,
                    fjs=d.getElementsByTagName(s)[0],
                    p='https';
                if(!d.getElementById(id)){
                    js=d.createElement(s);
                    js.id=id;
                    js.src=p+"://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js,fjs);
                }
            }
            (document,"script","twitter-wjs");
    }

 // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

}