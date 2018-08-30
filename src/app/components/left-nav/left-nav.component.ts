import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  // navItems: Array<object> = [
  //   {
  //     url: "home",
  //     label: "Home"
  //   },
  //   {
  //     url: "lead-in-lieu",
  //     label: "Lead In Lieu"
  //   },
  //   {
  //     url: "equity-analysis",
  //     label: "Equity Analysis"
  //   },
  //   {
  //     url: "forclouser-bid",
  //     label: "Forclouser Bid"
  //   },
  //   {
  //     url: "short-sale",
  //     label: "Short Sale"
  //   }
  // ];
  constructor() { }

  ngOnInit() {
  }

}
