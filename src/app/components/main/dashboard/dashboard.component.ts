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
  booksWrittenList: any[];
  constructor(private router: Router) { }

  ngOnInit() {
    const bookgetData = JSON.parse(localStorage.getItem('booksArray'));
    this.booksWritten = bookgetData;
    console.log(bookgetData);
    this.booksWrittenList = [{ 'row1': [
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' }
                                        ]
                              },
                             { 'row2': [
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' },
                                         {'img': '', 'bookname': '', 'author': 'Mustang' }
                                       ]
                             }
                            ];
   $(function() {

   });
  }

  publishBook() {
    this.router.navigate(['/titleinformation']);
    localStorage.clear();
  }

  contractConsultant(param: any) {
  console.log(param);
   localStorage.setItem('booktitle' , param);
  }
}
