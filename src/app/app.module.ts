import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { Form, FormsModule } from '@angular/forms';
import { Http, HttpModule, Response } from '@angular/Http';

import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { EquityAnalysisComponent } from './components/equity-analysis/equity-analysis.component';

import { EquityAnalysisService } from './services/equity-analysis.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    MainPageComponent,
    PageNotFoundComponent,
    LeftNavComponent,
    EquityAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpModule
  ],
  providers: [
    EquityAnalysisService,
    Title
],

  bootstrap: [AppComponent]
})
export class AppModule { }
