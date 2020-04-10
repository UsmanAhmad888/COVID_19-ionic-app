import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContryDetailsComponent } from './contry-details/contry-details.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ ContryDetailsComponent],
  exports: [ContryDetailsComponent]
})
export class ExploreContainerComponentModule {}
