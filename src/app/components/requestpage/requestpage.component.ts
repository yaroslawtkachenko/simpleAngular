import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from "@angular/router";;

@Component({
  selector: 'app-requestpage',
  templateUrl: './requestpage.component.html',
  styleUrls: ['./requestpage.component.css']
})
export class RequestpageComponent implements OnInit {
  isFName = true;
  isLName = true;
  isCode = true;
  isPhone = true;
  isAddress = true;
  user = null;
  oldUser = null;
  constructor(public router: Router) {}

  gotoMainPage(url: string) {
    this.router.navigateByUrl(url);
  };

  ngOnInit() {
    this.user = new User('Y', 'T', 2321, 321321321, 'ewqwewq');
    this.oldUser = Object.create(this.user);
  }

  onSave = () => {
    this.isFName = true;
    this.isLName = true;
    this.isCode = true;
    this.isPhone = true;
    this.isAddress = true;
    console.log(this.user);
    this.oldUser = Object.create(this.user);
  }
}
