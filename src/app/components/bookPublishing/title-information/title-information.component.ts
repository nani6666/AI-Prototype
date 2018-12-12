import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-information',
  templateUrl: './title-information.component.html',
  styleUrls: ['./title-information.component.css']
})
export class TitleInformationComponent implements OnInit {
  titleInfoparam: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
   this.titleInfoparam = false;
  }
 submit() {
  this.titleInfoparam = true;
  this.router.navigate(['/coverDesign']);
 }
}
