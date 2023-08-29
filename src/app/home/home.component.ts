import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from "angular-google-tag-manager";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private gtmService: GoogleTagManagerService) {}
  trackMe() {
    console.log("hello");
    // push GTM data layer with a custom event
    const gtmTag = {
      event: "my-btn",
      data: "my-custom-event"
    };
    this.gtmService.pushTag(gtmTag);
  }

}
