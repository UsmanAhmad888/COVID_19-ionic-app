import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'country-stats',
    loadChildren: () => import('./tab2/country-stats/country-stats.module').then( m => m.CountryStatsPageModule)
  }
  ,
  {
    path: 'country-stats/:country',
    loadChildren: () => import('./tab2/country-stats/country-stats.module').then( m => m.CountryStatsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
