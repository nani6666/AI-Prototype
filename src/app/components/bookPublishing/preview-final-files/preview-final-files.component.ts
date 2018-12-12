import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-final-files',
  templateUrl: './preview-final-files.component.html',
  styleUrls: ['./preview-final-files.component.css']
})
export class PreviewFinalFilesComponent implements OnInit {

 date: any;
 finishedParam: boolean;
  constructor() { }

  ngOnInit() {
    this.finishedParam = true;
    this.date =  new Date();

  }

}
