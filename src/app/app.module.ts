import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GoogleTagManagerService } from "angular-google-tag-manager";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('G-6E0MX54SD6'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [
    {provide: 'googleTagManagerId', useValue: 'GTM-P7Z8W95V'},
    GoogleTagManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
