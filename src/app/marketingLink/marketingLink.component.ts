import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-link',
  templateUrl: './marketingLink.component.html',
  styleUrls: ['./marketingLink.component.css']
})
export class MarketingLinkComponent implements OnInit {
  bikeImagePath: string;

  constructor() {
    this.bikeImagePath = '../assets/images/bike.jpg';
  }

  ngOnInit() {
  }

}
