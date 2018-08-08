import { BrowserModule,Title } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';

import { BlogserviceService } from './blogservice.service';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DataService } from './data.service';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    TestimonialsComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule
   
  ],
  providers: [Title,BlogserviceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
