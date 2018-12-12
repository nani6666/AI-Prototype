import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coverdesign',
  templateUrl: './coverdesign.component.html',
  styleUrls: ['./coverdesign.component.css']
})
export class CoverdesignComponent implements OnInit {
  product: any[];
  loadingProgress: boolean;
  coverdesignparam: boolean;
  constructor() { }

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
  this.product = ['5*8' , '5.06*7.81' , '5.25*8' , '5.5*8.5' ,
                  '6*9' , '6.14*9.21' , '6.69*9.61' , '7*10' ,
                  '7.44*9.69' , '7.5*9.25' , '8*10' , '8.25*6' ,
                  '8.25*8.25' , '10*8' , '6*8' , '9*5'];
  }
}
