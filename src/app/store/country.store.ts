import { Injectable } from '@angular/core';
import { action, observable, computed, autorun } from "mobx";
@Injectable({
  providedIn: 'root'
})
export class CountryStore {
  @observable selectedCountryData: any;
  constructor() { 
    autorun(() => {
      if (localStorage["selectedCountry"]) {
          this.selectedCountryData = JSON.parse(localStorage["selectedCountry"]);
      }
    })
  } 

  // @computed get selectedCountry() {
  //   return this.selectedCountry
  // }

  @action setSelectedCountry(data) {
    this.selectedCountryData = Object.assign({}, data)
    console.log("store value",this.selectedCountryData);
    window.localStorage["selectedCountry"] = JSON.stringify(data);
  }
}
