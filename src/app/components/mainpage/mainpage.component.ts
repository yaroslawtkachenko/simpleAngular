import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  gotoRequest(url: string) {
    this.router.navigateByUrl(url);
  };
}
