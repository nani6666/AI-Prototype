import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendfor-review',
  templateUrl: './sendfor-review.component.html',
  styleUrls: ['./sendfor-review.component.css']
})
export class SendforReviewComponent implements OnInit {
  srparam: boolean;
  bookTitle: any;
  bookAudience: any;
  bookLang: any;
  bookCategory: any;
  authorBiography: any;
  bookKeywords: any;
  bookAuthorName: any;
  bookSubtitle: any;
  bookDescription: any;
  constructor() { }

  ngOnInit() {
    this.srparam = false;
    const bookgetData = JSON.parse(localStorage.getItem('booksData'));
     console.log(bookgetData);
     this.bookTitle = bookgetData.bookTitle;
  this.bookLang = bookgetData.bookLang;
  this.bookCategory = bookgetData.bookCategory;
  this.authorBiography =  bookgetData.authorBiography;
 // this.bookKeywords =  bookgetData.bookKeywords;
  this.bookAuthorName = bookgetData.bookAuthorName;
  this.bookSubtitle =  bookgetData.bookSubtitle;
  this.bookDescription =  bookgetData.bookDescription;
  }

}
