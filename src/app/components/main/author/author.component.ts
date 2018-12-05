import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
   newSection: boolean;
   submitSection: boolean;
   mainSection: boolean;
  constructor() { }

  ngOnInit() {
    this.mainSection =  true;
    this.newSection = false;
    this.submitSection = false;
  }

  callNewsection(param) {
   if (param  == 'new') {
    this.newSection = true;
    this.submitSection = false;
    this.mainSection =  false;
   } else if (param  == 'submit') {
    this.newSection = false;
    this.submitSection = true;
    this.mainSection =  false;
   } else {
    this.newSection = false;
    this.submitSection = false;
    this.mainSection =  true;
   }
  }

}
