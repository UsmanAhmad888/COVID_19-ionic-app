import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import * as moment from "moment";
import { CountryStore } from 'src/app/store/country.store';
@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.page.html',
  styleUrls: ['./country-stats.page.css'],
})
export class CountryStatsPage implements OnInit {
  countryByParams: string;

  @ViewChild('barChart', { static: true }) barChart;

  bars: any;

  constructor(
    public activeRoute: ActivatedRoute,
    public httpClient: HttpClient,
    public countryStore:CountryStore) { }

  ngOnInit() {
    
    this.httpClient.get('https://api.covid19api.com/country/' + this.activeRoute.snapshot.params.country + '/status/confirmed')
      .subscribe(response => {
        // this.covidData = response.body
        console.log(response);
        this.createBarChart(response);
      }, error => {
        console.log('error', error)
      })
  }

  ionViewDidEnter() {
    // this.createBarChart();
  }
  getlabelsForGraph(dataToManipulate){
return dataToManipulate.map(x=>moment(x.Date).format("MM/DD/YYYY"));
  }

  getValuesForGraph(dataToManipulate){
return dataToManipulate.map(x=>x.Cases)
  }
  // ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8']
  createBarChart(graphData) {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.getlabelsForGraph(graphData) ,
        datasets: [{
          label: this.activeRoute.snapshot.params.country + ' Covid Cases Graph',
          data: this.getValuesForGraph(graphData),
          // backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 2,
          pointBorderWidth:0,
          pointRadius:0
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display:false
          } 
          }],
          xAxes: [{
            gridLines: {
                display:false
            }
        }]
        }
      }
    });
  }
  // https://untitled-0sqd2pmoz819.runkit.sh/getConfirmByCountry?country=India


}
