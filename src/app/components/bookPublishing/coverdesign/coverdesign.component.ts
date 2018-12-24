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
  constructor(private router: Router , private toastr: ToastrService) { }

  ngOnInit() {
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

 if (this.bookTitle == '') {
   
 } else if (this.bookTitle == 'Rich Dad & Poor Dad') {

 } else if (this.bookTitle == 'The Alchemist') {
  
  } else if (this.bookTitle == 'ZERO to ONE') {
    
  } else if (this.bookTitle == 'The 4 hour work week') {
    
  } else if (this.bookTitle == 'Think & Grow Rich') {
   
  } else if (this.bookTitle == 'The Art of war') {
    
  } else if (this.bookTitle == 'E-Myth') {
    
  } else if (this.bookTitle == 'Good to Great') {

  } else if (this.bookTitle == '7 habits of highly Effective People') {
    
  } else if (this.bookTitle == 'How to win Friends and Infulence people') {
    
  }

  this.product = [{'size' : '5*8' , 'color': 'red' } , {'size' : '5*8' , 'color': 'red' } ,
                  {'size' : '5*8' , 'color': 'red' } , {'size' : '5*8' , 'color': 'red' } ,
                  {'size' : '6*9' , 'color': 'blue' } , {'size' : '6*9' , 'color': 'blue' } ,
                  {'size' : '6*9' , 'color': 'blue' } ,  {'size' : '6*9' , 'color': 'blue' },
                  {'size' : '8*10' , 'color': 'yellow' } , {'size' : '8*10' , 'color': 'yellow' },
                  {'size' : '8*10' , 'color': 'yellow' } , {'size' : '8*10' , 'color': 'yellow' },
                  {'size' : '9*5' , 'color': 'grey' } , {'size' : '9*5' , 'color': 'grey' },
                  {'size' : '9*5' , 'color': 'grey' } , {'size' : '9*5' , 'color': 'grey' },
                ];
  }
   saveReview() {
    this.router.navigate(['/sendReview']);
   }
}
