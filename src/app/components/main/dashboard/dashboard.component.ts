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
  booksWrittenListRow1: any[];
  booksWrittenListRow2: any[];
  constructor(private router: Router) { }

  ngOnInit() {
    const bookgetData = JSON.parse(localStorage.getItem('booksArray'));
    this.booksWritten = bookgetData;
    console.log(bookgetData);
    this.booksWrittenListRow1 =  [
                                   {'img': '../../../../assets/images/booksWritten/4hourworkweek.jpg',
                                   'bookname': 'The 4 hour work week', 'author': 'Timothy Ferriss' },
                                   {'img': '../../../../assets/images/booksWritten/7habits.jpg',
                                   'bookname': 'The 7 Habits of Highly Effective People', 'author': 'Stephen R. Covey' },
                                   {'img': '../../../../assets/images/booksWritten/artwithstart.jpg',
                                   'bookname': 'The Art of the Start 2.0', 'author': 'Guy Kawasaki' },
                                   {'img': '../../../../assets/images/booksWritten/emyth.jpg',
                                   'bookname': 'The E-Myth Revisited', 'author': 'Michael E. Gerber' },
                                   {'img': '../../../../assets/images/booksWritten/emythcontractor.jpg',
                                   'bookname': 'The E-Myth Contractor', 'author': 'Michael E. Gerber' },
                                   {'img': '../../../../assets/images/booksWritten/rework.jpeg',
                                   'bookname': 'ReWork', 'author': 'Jason Fried' },
                                 ] ;
     this.booksWrittenListRow2 =  [
                                    {'img': '../../../../assets/images/booksWritten/startwithwhy.png',
                                     'bookname': 'Start With Why', 'author': 'Simon Sinek' },
                                     {'img': '../../../../assets/images/booksWritten/the$100.jpg',
                                     'bookname': 'The $100 Startup', 'author': 'Chris Guillebeau' },
                                     {'img': '../../../../assets/images/booksWritten/thehardthing.jpeg',
                                     'bookname': 'The Hard Thing About Hard Things', 'author': 'Ben Horowitz' },
                                     {'img': '../../../../assets/images/booksWritten/theleanStartup.jpg',
                                      'bookname': 'The Lean Startup', 'author': 'Eric Ries' },
                                     {'img': '../../../../assets/images/booksWritten/thinkandgrowrich.jpg',
                                      'bookname': 'Think and Grow Rich!', 'author': 'Napoleon Hill' },
                                     {'img': '../../../../assets/images/booksWritten/zerotoone.jpg',
                                      'bookname': 'Zero to One', 'author': 'Peter Thiel' },
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
