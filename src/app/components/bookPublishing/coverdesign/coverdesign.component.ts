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
}
