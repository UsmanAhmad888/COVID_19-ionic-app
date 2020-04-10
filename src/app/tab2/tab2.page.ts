import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';
import { Route, Router } from '@angular/router';
import { CountryStore } from '../store/country.store';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  countryNameToSearch: string = "";
  params: any;
  covidData: any;
  isScrollActive: boolean = false
  constructor(public httpClient: HttpClient, public route: Router,
    public countryStore: CountryStore) {
    this.params = {
      limit: '20',
      search: "",
      page: '1'
    }


    this.refresh()
  }
  initParams() {
    this.params = {
      limit: '20',
      search: "",
      page: '1'
    }
  }
  enableScroll() {
    this.isScrollActive = false;
    if (this.infiniteScroll) {
      this.infiniteScroll.disabled = false;
    }
  }
  search() {
    this.initParams();
    this.infiniteScroll.disabled = true;
    this.params.search = this.countryNameToSearch;
    this.httpClient.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search', {
      params: this.params,
      observe: 'response'
    })
      .toPromise()
      .then(response => {
        this.covidData = response.body
        console.log(response);
      })
      .catch(console.log);

  }
  navigateToDetails(data) {
    this.countryStore.setSelectedCountry(data);
    setTimeout(() => {
      this.route.navigateByUrl("/country-stats/" + data.country);
    }, 1000);
  }
  loadData = (event) => {
    if (!this.isScrollActive) {

      event.target.complete();
      this.params.page++;
      let self = this;
      this.httpClient.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search', {
        params: this.params,
        observe: 'response'
      })
        .toPromise()
        .then((response: any) => {
          self.covidData.data.rows = self.covidData.data.rows.concat(response.body.data.rows)
          console.log(response);
        })
        .catch(console.log);
      if (self.params.page == 12) {
        event.target.disabled = true;
      } else {
        event.target.disabled = false
      }
    }
    // }, 500);
  }
  refresh() {
    this.enableScroll();
    this.initParams();
    this.countryNameToSearch = "";
    this.httpClient.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search', {

      observe: 'response'
    })
      .toPromise()
      .then(response => {
        this.covidData = response.body
        console.log(response);
      })
      .catch(console.log);

  }

}
