import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-final-files',
  templateUrl: './preview-final-files.component.html',
  styleUrls: ['./preview-final-files.component.css']
})
export class PreviewFinalFilesComponent implements OnInit {
 date: any;
 finishedParam: boolean;
 coverDesign: any[];
 booksArray: any[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.booksArray = [];
    this.finishedParam = true;
    this.date =  new Date();
    const coverDesignData = JSON.parse(localStorage.getItem('coverDesign'));
    this.coverDesign = coverDesignData ;
  }

finalsubmit() {
  const bookgetData = JSON.parse(localStorage.getItem('booksData'));
  this.booksArray.push(bookgetData);
  localStorage.setItem('booksArray' , JSON.stringify(this.booksArray));
  localStorage.removeItem('booksData');
  this.router.navigate(['/dashboard']);
}
}
