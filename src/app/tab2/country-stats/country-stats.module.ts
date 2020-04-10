import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryStatsPageRoutingModule } from './country-stats-routing.module';

import { CountryStatsPage } from './country-stats.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryStatsPageRoutingModule
  ],
  declarations: [CountryStatsPage]
})
export class CountryStatsPageModule {}
