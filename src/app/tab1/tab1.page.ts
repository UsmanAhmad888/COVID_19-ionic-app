import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  data:any;
  constructor(private http: HttpClient) {
    this.http.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats').subscribe((response:any) => {
    console.log(response);
    this.data=response.data;
});
  }

}
