import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-title-information',
  templateUrl: './title-information.component.html',
  styleUrls: ['./title-information.component.css']
})
export class TitleInformationComponent implements OnInit {
  titleInfoparam: boolean;
  step1: boolean;
  step2: boolean;
  step3: boolean;
  bookTitle: any;
  bookAudience: any;
  bookLang: any;
  bookCategory: any;
  authorBiography: any;
  bookKeywords: any;
  bookAuthorName: any;
  bookSubtitle: any;
  bookDescription: any;

  constructor(private router: Router , private toastr: ToastrService) { }

  ngOnInit() {
   this.titleInfoparam = false;
   this.step1 = true;
   this.step2 = false;
   this.step3 = false;
   const bookgetData = JSON.parse(localStorage.getItem('booksData'));
   if (bookgetData !== null) {
    this.bookTitle = bookgetData.bookTitle;
  this.bookLang = bookgetData.bookLang;
  this.bookCategory = bookgetData.bookCategory;
  this.authorBiography =  bookgetData.authorBiography;
 // this.bookKeywords =  bookgetData.bookKeywords;
  this.bookAuthorName = bookgetData.bookAuthorName;
  this.bookSubtitle =  bookgetData.bookSubtitle;
  this.bookDescription =  bookgetData.bookDescription;
   }
  
   $(function() {});
  }
 submit() {
   const booksData = {
    'bookTitle': this.bookTitle,
    'bookAudience': this.bookAudience,
    'bookLang': this.bookLang,
    'bookCategory': this.bookCategory,
    'authorBiography': this.authorBiography,
    'bookKeywords': this.bookKeywords,
    'bookAuthorName': this.bookAuthorName,
    'bookSubtitle': this.bookSubtitle,
    'bookDescription': this.bookDescription
   };
   console.log(booksData);
   localStorage.setItem('booksData' , JSON.stringify(booksData));
  this.titleInfoparam = true;
  this.router.navigate(['/coverDesign']);
 }

 previous(param: any) {
   console.log(param);
   if (param === 1) {
    this.step2 = false;
    this.step3 = false;
    this.step1 = true;
   } else if (param === 2 ) {
    this.step2 = true;
    this.step3 = false;
    this.step1 = false;
   }
 }

 next(param: any) {
   console.log(this.bookTitle);
  if ( this.bookTitle) {
    if (param === 1) {
      this.step2 = true;
      this.step3 = false;
      this.step1 = false;
     } else if (param === 2 ) {
      this.step2 = false;
      this.step3 = true;
      this.step1 = false;
     }
  } else {
    this.toastr.error('Please Enter Book Name', '');
  }
 }

 booktitlechange() {
 if (this.bookTitle == '') {
  this.bookDescription =  '';
 } else if (this.bookTitle == 'Rich Dad & Poor Dad') {
  // tslint:disable-next-line:max-line-length
  this.bookDescription =  'Rich Dad Poor Dad is about Robert Kiyosaki and his two dads—his real father (poor dad) and the father of his best friend (rich dad)—and the ways in which both men shaped his thoughts about money and investing. You don t need to earn a high income to be rich.';
 } else if (this.bookTitle == 'The Alchemist') {
  // tslint:disable-next-line:max-line-length
  this.bookDescription =  'The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids';
  } else if (this.bookTitle == 'ZERO to ONE') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'Zero To One is an inside look at Peter Thiel s philosophy and strategy for making your startup a success by looking at the lessons he learned from founding and selling PayPal, investing in Facebook and becoming a billionaire in the process';
  } else if (this.bookTitle == 'The 4 hour work week') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  ' The 4-Hour Workweek is the step-by-step blueprint to free yourself from the shackles of a corporate job, create a business to fund the lifestyle of your dreams, and live life like a millionaire, without actually having to be one.';
  } else if (this.bookTitle == 'Think & Grow Rich') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'When you begin to think and grow rich, you will observe that riches begin with a state of mind, with definiteness of purpose, with little or no hard work';
  } else if (this.bookTitle == 'The Art of war') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'The Art Of War has been considered the definitive text on military strategy and warfare ever since being written in ancient China around 500 BC, inspiring businesses, athletes, and of course generals to beat their opponents and competition the right way until today';
  } else if (this.bookTitle == 'E-Myth') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  ' The E-Myth Revisited explains why 80% of small businesses fail, and how to ensure yours isn t among those by building a company that s based on systems and not on the work of a single individual.';
  } else if (this.bookTitle == 'Good to Great') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'Collins outlines a model for turning a good, average or even a mediocre company into a great one. The book includes a useful model which brings the theory together in an actionable way. This summary will outline Collin s 3 key aspects for a Great company; disciplined people, disciplined thought & discipline action.';
  } else if (this.bookTitle == '7 habits of highly Effective People') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'That s where the seven habits of highly effective people come in: Habits 1, 2, and 3 are focused on self-mastery and moving from dependence to independence. Habits 4, 5, and 6 are focused on developing teamwork, collaboration, and communication skills, and moving from independence to interdependence.';
  } else if (this.bookTitle == 'How to win Friends and Infulence people') {
    this.bookDescription =  'Time-tested, rock-solid advice that has carried thousands of' 
                            + 'now successful people up the ladder of success in their business and personal lives.'
                            + 'A classic book that gave birth to the self-help industry, How to Win Friends and'
                            + 'Influence People is a phenomenal bestseller, having sold over 15 million copies'
                             + 'worldwide and still going strong.';
  }
 }
}
