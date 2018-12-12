import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendfor-review',
  templateUrl: './sendfor-review.component.html',
  styleUrls: ['./sendfor-review.component.css']
})
export class SendforReviewComponent implements OnInit {
  srparam: boolean;
  constructor() { }

  ngOnInit() {
    this.srparam = false;
  }

}
