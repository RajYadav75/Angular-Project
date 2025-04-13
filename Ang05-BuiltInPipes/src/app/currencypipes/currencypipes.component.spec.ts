import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencypipesComponent } from './currencypipes.component';

describe('CurrencypipesComponent', () => {
  let component: CurrencypipesComponent;
  let fixture: ComponentFixture<CurrencypipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencypipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencypipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
