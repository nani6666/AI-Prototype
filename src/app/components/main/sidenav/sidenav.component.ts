import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() titleInfo: boolean;
  @Input() coverDesign: boolean;
  @Input() sendReview: boolean;
  @Input() finish: boolean;
  bookTitle: any;
  constructor() { }

  ngOnInit() {
    this.bookTitle = localStorage.getItem('booktitle');
  }

}
