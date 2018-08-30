import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EquityAnalysisComponent } from './components/equity-analysis/equity-analysis.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, data: { title: 'LMCA Login' } },
  {
    path: 'main', component: MainPageComponent, pathMatch: 'prefix',
    children: [
      { path: 'home', component: HomePageComponent, data: { title: 'LMCA Home' } },
      { path: 'equity-analysis', component: EquityAnalysisComponent, data: { title: 'LMCA Equity Analysis' } },
      { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }