import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coverdesign',
  templateUrl: './coverdesign.component.html',
  styleUrls: ['./coverdesign.component.css']
})
export class CoverdesignComponent implements OnInit {
  product: any[];
  constructor() { }

  ngOnInit() {

  this.product = ['5*8' , '5.06*7.81' , '5.25*8' , '5.5*8.5' ,
                  '6*9' , '6.14*9.21' , '6.69*9.61' , '7*10' ,
                  '7.44*9.69' , '7.5*9.25' , '8*10' , '8.25*6' ,
                  '8.25*8.25' , '10*8' , '6*8' , '9*5'];
  }
}
