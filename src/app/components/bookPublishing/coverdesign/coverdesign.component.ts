import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coverdesign',
  templateUrl: './coverdesign.component.html',
  styleUrls: ['./coverdesign.component.css']
})
export class CoverdesignComponent implements OnInit {
  product: any[];
  loadingProgress: boolean;
  coverdesignparam: boolean;
  bookTitle: any;
  oneimage: any;
  twoimage: any;
  threeimage: any;
  fourimage: any;
  coverDesignArr: any[];
  constructor(private router: Router , private toastr: ToastrService) { }

  ngOnInit() {
    this.coverDesignArr = [];
    this.coverdesignparam = false;
    $(function() {
      let current_progress = 0;
      const interval = setInterval(function() {
          current_progress += 5;
          $('#dynamic')
          .css('width', current_progress + '%')
          .attr('aria-valuenow', current_progress)
          .text(current_progress + '%');
          if (current_progress >= 100) {
            clearInterval(interval);
          }
      }, 200);
    });
   this.loadingProgress = true;
    setTimeout(() => {
      this.loadingProgress = false;
 }, 5000);
 const bookgetData = JSON.parse(localStorage.getItem('booksData'));
   this.bookTitle = bookgetData.bookTitle;
  if (this.bookTitle == '') {
   this.oneimage = '../../../../assets/images/books/';
   this.twoimage = '../../../../assets/images/books/';
   this.threeimage = '../../../../assets/images/books/';
   this.fourimage = '../../../../assets/images/books/';
 } else if (this.bookTitle == 'Rich Dad & Poor Dad') {
  this.oneimage = '../../../../assets/images/books/richDadandpoorDad/one.jpg';
  this.twoimage = '../../../../assets/images/books/richDadandpoorDad/two.jpg';
  this.threeimage = '../../../../assets/images/books/richDadandpoorDad/three.jpg';
  this.fourimage = '../../../../assets/images/books/richDadandpoorDad/four.jpg';
 } else if (this.bookTitle == 'The Alchemist') {
  this.oneimage = '../../../../assets/images/books/alchemist/one.jpg';
  this.twoimage = '../../../../assets/images/books/alchemist/two.jpg';
  this.threeimage = '../../../../assets/images/books/alchemist/three.jpg';
  this.fourimage = '../../../../assets/images/books/alchemist/four.jpg';
  } else if (this.bookTitle == 'ZERO to ONE') {
    this.oneimage = '../../../../assets/images/books/021/one.jpg';
   this.twoimage = '../../../../assets/images/books/021/two.png';
   this.threeimage = '../../../../assets/images/books/021/three.jpeg';
   this.fourimage = '../../../../assets/images/books/021/four.jpg';
  } else if (this.bookTitle == 'The 4 hour work week') {
    this.oneimage = '../../../../assets/images/books/4hour/one.jpg';
   this.twoimage = '../../../../assets/images/books/4hour/two.jpg';
   this.threeimage = '../../../../assets/images/books/4hour/three.jpg';
   this.fourimage = '../../../../assets/images/books/4hour/four.jpg';
  } else if (this.bookTitle == 'Think & Grow Rich') {
    this.oneimage = '../../../../assets/images/books/thinkgrowrich/one.jpg';
    this.twoimage = '../../../../assets/images/books/thinkgrowrich/two.jpg';
    this.threeimage = '../../../../assets/images/books/thinkgrowrich/three.png';
    this.fourimage = '../../../../assets/images/books/thinkgrowrich/four.jpg';
  } else if (this.bookTitle == 'The Art of war') {
    this.oneimage = '../../../../assets/images/books/artofwar/one.jpeg';
   this.twoimage = '../../../../assets/images/books/artofwar/two.jpg';
   this.threeimage = '../../../../assets/images/books/artofwar/three.jpg';
   this.fourimage = '../../../../assets/images/books/artofwar/four.jpg';
  } else if (this.bookTitle == 'E-Myth') {
    this.oneimage = '../../../../assets/images/books/e-myth/one.jpg';
   this.twoimage = '../../../../assets/images/books/e-myth/two.jpg';
   this.threeimage = '../../../../assets/images/books/e-myth/three.jpg';
   this.fourimage = '../../../../assets/images/books/e-myth/four.jpg';
  } else if (this.bookTitle == 'Good to Great') {
    this.oneimage = '../../../../assets/images/books/goodtogreat/one.jpg';
    this.twoimage = '../../../../assets/images/books/goodtogreat/two.jpg';
    this.threeimage = '../../../../assets/images/books/goodtogreat/three.jpg';
    this.fourimage = '../../../../assets/images/books/goodtogreat/four.jpg';
  } else if (this.bookTitle == '7 habits of highly Effective People') {
    this.oneimage = '../../../../assets/images/books/7habits/one.jpg';
   this.twoimage = '../../../../assets/images/books/7habits/two.jpg';
   this.threeimage = '../../../../assets/images/books/7habits/three.jpg';
   this.fourimage = '../../../../assets/images/books/7habits/four.jpg';
  } else if (this.bookTitle == 'How to win Friends and Infulence people') {
    this.oneimage = '../../../../assets/images/books/htwfip/one.jpg';
   this.twoimage = '../../../../assets/images/books/htwfip/two.jpg';
   this.threeimage = '../../../../assets/images/books/htwfip/three.jpg';
   this.fourimage = '../../../../assets/images/books/htwfip/four.jpg';
  }

  this.product = [{'size' : '5*8' , 'color': 'red' , 'image': this.oneimage} ,
                  {'size' : '5*8' , 'color': 'red', 'image': this.oneimage } ,
                  {'size' : '5*8' , 'color': 'red' , 'image': this.oneimage} ,
                  {'size' : '5*8' , 'color': 'red' , 'image': this.oneimage} ,
                  {'size' : '6*9' , 'color': 'blue' , 'image': this.twoimage} ,
                   {'size' : '6*9' , 'color': 'blue' , 'image': this.twoimage } ,
                  {'size' : '6*9' , 'color': 'blue' , 'image': this.twoimage  } ,
                  {'size' : '6*9' , 'color': 'blue' , 'image': this.twoimage},
                  {'size' : '8*10' , 'color': 'yellow' , 'image': this.threeimage},
                  {'size' : '8*10' , 'color': 'yellow' , 'image': this.threeimage},
                  {'size' : '8*10' , 'color': 'yellow' , 'image': this.threeimage} ,
                  {'size' : '8*10' , 'color': 'yellow' , 'image': this.threeimage},
                  {'size' : '9*5' , 'color': 'grey' , 'image': this.fourimage} ,
                  {'size' : '9*5' , 'color': 'grey' , 'image': this.fourimage},
                  {'size' : '9*5' , 'color': 'grey' , 'image': this.fourimage} ,
                  {'size' : '9*5' , 'color': 'grey' , 'image': this.fourimage},
                ];
  }
   saveReview() {
    this.router.navigate(['/sendReview']);
   }

   chooseCover(param: any) {
   this.coverDesignArr.push(param);
   localStorage.setItem('coverDesign' , JSON.stringify(this.coverDesignArr));
   }
}
