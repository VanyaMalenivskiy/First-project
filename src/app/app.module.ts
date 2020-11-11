import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Router, RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: AboutComponent},
  {path: '', component: NewsComponent},
  {path: '', component: HelpComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
