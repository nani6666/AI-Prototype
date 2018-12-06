import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  today = new Date();
  booksWritten: any[] ;
  constructor(private router: Router) { }

  ngOnInit() {
    this.booksWritten = [{'Book Name': 'something'}];
   $(function() {

   });
  }

  publishBook() {
   this.booksWritten.push({'Book Name': 'something'});
  }

  contractConsultant(param: any) {
  console.log(param);
   localStorage.setItem('booktitle' , param);
   this.router.navigate(['/titleinformation']);
  }
}
