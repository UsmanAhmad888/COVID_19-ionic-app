import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountryStatsPage } from './country-stats.page';

describe('CountryStatsPage', () => {
  let component: CountryStatsPage;
  let fixture: ComponentFixture<CountryStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
