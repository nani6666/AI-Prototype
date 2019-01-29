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
  count = 0;
  step1: boolean;
  step2: boolean;
  step3: boolean;
  bookTitle: any;
  booksArray = ['Rich Dad & Poor Dad' , 'The Alchemist' , 'ZERO to ONE' , 'The 4 hour work week' , 'Think & Grow Rich' , 'The Art of war'
               , 'E-Myth' , 'Good to Great' , '7 habits of highly Effective People' , 'How to win Friends and Infulence people'];
  bookAudience: any;
  bookLang: any;
  bookCategory: any;
  authorBiography: any;
  bookKeywords: any;
  bookAuthorName: any;
  bookCategoryArray = ['Action and adventure' , 'Art' , 'Biography' , 'Health' , 'cooking' , 'History' ,
                    'crime' , 'Drama' , 'Horror' , 'Comedy' , 'Thriller' , 'Romance' , 'Personality Development' , 'Sci-Fic'];
  bookSubtitle: any;
  bookDescription: any;

  constructor(private router: Router , private toastr: ToastrService) { }

  ngOnInit() {
    const randBookTitle = this.randomArray(this.booksArray);
  // console.log(randBookTitle);
   this.bookTitle = randBookTitle;
   this.bookCategory = this.randomArray(this.bookCategoryArray);
   this.booktitlechange();
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
   if (param === 1) {
    this.step2 = false;
    this.step3 = false;
    this.step1 = true;
    this.booktitlechange();
   } else if (param === 2 ) {
    this.step2 = true;
    this.step3 = false;
    this.step1 = false;
    this.bookAuthorName = 'Aabcdeae';
    this.showLetter('#authorNameField' , this.bookAuthorName , 1000);
    this.authorBiography = 'aACGHFS JBM XN JH XHJ JH N jv ikbhj hkbiubihi khbuibuiihn khbhubuuugtgyu gvuyyu';
    this.showLetter('#authorBioField' , this.authorBiography , 1000);
   }
 }

 next(param: any) {
   console.log(this.bookTitle);
  if ( this.bookTitle) {
    if (param === 1) {
      this.step2 = true;
      this.step3 = false;
      this.step1 = false;
      this.bookAuthorName = 'Aabcdeae';
      this.showLetter('#authorNameField' , this.bookAuthorName , 1000);
      this.authorBiography = 'aACGHFS JBM XN JH XHJ JH N jv ikbhj hkbiubihi khbuibuiihn khbhubuuugtgyu gvuyyu';
      this.showLetter('#authorBioField' , this.authorBiography , 1000);
     } else if (param === 2 ) {
      this.step2 = false;
      this.step3 = true;
      this.step1 = false;
      this.showLetter('#categoryField' , this.bookCategory , 1000);
      this.bookLang = 'English';
      this.showLetter('#langField' , this.bookLang , 1000);
      this.bookAudience = 'Adult';
      this.showLetter('#audienceField' , this.bookAudience , 1000);
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
  $('#bookTitle').val('');
  $('#titleDescriptionField').val('');
  this.showLetter('#bookTitle', 'Rich Dad & Poor Dad', 1000);
  this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
 } else if (this.bookTitle == 'The Alchemist') {
  // tslint:disable-next-line:max-line-length
  this.bookDescription =  'The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids';
  $('#bookTitle').val('');
  $('#titleDescriptionField').val('');
  this.showLetter('#bookTitle', 'The Alchemist',   1000);
  this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
  } else if (this.bookTitle == 'ZERO to ONE') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'Zero To One is an inside look at Peter Thiel s philosophy and strategy for making your startup a success by looking at the lessons he learned from founding and selling PayPal, investing in Facebook and becoming a billionaire in the process';
    $('#bookTitle').val('');
    $('#titleDescriptionField').val('');
    this.showLetter('#bookTitle', 'ZERO to ONE', 1000);
    this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
  } else if (this.bookTitle == 'The 4 hour work week') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  ' The 4-Hour Workweek is the step-by-step blueprint to free yourself from the shackles of a corporate job, create a business to fund the lifestyle of your dreams, and live life like a millionaire, without actually having to be one.';
    $('#bookTitle').val('');
    $('#titleDescriptionField').val('');
    this.showLetter('#bookTitle', 'The 4 hour work week',   1000);
    this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
  } else if (this.bookTitle == 'Think & Grow Rich') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'When you begin to think and grow rich, you will observe that riches begin with a state of mind, with definiteness of purpose, with little or no hard work';
    $('#bookTitle').val('');
    $('#titleDescriptionField').val('');
    this.showLetter('#bookTitle',  'Think & Grow Rich' , 1000);
    this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
  } else if (this.bookTitle == 'The Art of war') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'The Art Of War has been considered the definitive text on military strategy and warfare ever since being written in ancient China around 500 BC, inspiring businesses, athletes, and of course generals to beat their opponents and competition the right way until today';
    $('#bookTitle').val('');
    $('#titleDescriptionField').val('');
    this.showLetter('#bookTitle' , 'The Art of war',  1000);
    this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
  } else if (this.bookTitle == 'E-Myth') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  ' The E-Myth Revisited explains why 80% of small businesses fail, and how to ensure yours isn t among those by building a company that s based on systems and not on the work of a single individual.';
    $('#bookTitle').val('');
    $('#titleDescriptionField').val('');
    this.showLetter('#bookTitle',  'E-Myth', 1000);
    this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
  } else if (this.bookTitle == 'Good to Great') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'Collins outlines a model for turning a good, average or even a mediocre company into a great one. The book includes a useful model which brings the theory together in an actionable way. This summary will outline Collin s 3 key aspects for a Great company; disciplined people, disciplined thought & discipline action.';
    $('#bookTitle').val('');
    $('#titleDescriptionField').val('');
    this.showLetter('#bookTitle',  'Good to Great', 1000);
    this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
  } else if (this.bookTitle == '7 habits of highly Effective People') {
    // tslint:disable-next-line:max-line-length
    this.bookDescription =  'That s where the seven habits of highly effective people come in: Habits 1, 2, and 3 are focused on self-mastery and moving from dependence to independence. Habits 4, 5, and 6 are focused on developing teamwork, collaboration, and communication skills, and moving from independence to interdependence.';
    $('#bookTitle').val('');
    $('#titleDescriptionField').val('');
    this.showLetter('#bookTitle', '7 habits of highly Effective People', 1000);
    this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
  } else if (this.bookTitle == 'How to win Friends and Infulence people') {
    this.bookDescription =  'Time-tested, rock-solid advice that has carried thousands of'
                            + 'now successful people up the ladder of success in their business and personal lives.'
                            + 'A classic book that gave birth to the self-help industry, How to Win Friends and'
                            + 'Influence People is a phenomenal bestseller, having sold over 15 million copies'
                             + 'worldwide and still going strong.';
     $('#bookTitle').val('');
     $('#titleDescriptionField').val('');
     this.showLetter('#bookTitle' , 'How to win Friends and Influence people', 1000);
     this.showLetter('#titleDescriptionField', this.bookDescription , 1000);
     }
 }

showLetter(field: any ,  text: any, delay: any) {
  $(field).val(text.substring(0, 1));
  for (let i = 0; i <= text.length; i++) {
    // tslint:disable-next-line:no-shadowed-variable
    (function(i: number) {
       setTimeout(function() {
          $(field).val(text.substring(0, i));
       }, (delay = delay + 100));
    })(i);
  }
  // this.timeoutfunction(titleDescription , titlefield , delay );
}

randomArray(param: any) {
 return  param[Math.floor(Math.random() * param.length)];
}

}
