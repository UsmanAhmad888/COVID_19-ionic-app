import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'contry-details',
  templateUrl: './contry-details.component.html',
  styleUrls: ['./contry-details.component.scss'],
})
export class ContryDetailsComponent implements OnInit {
@Input() data:any
  constructor() { }

  ngOnInit() {}

}
