import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingCardComponent } from './visiting-card.component';

describe('VisitingCardComponent', () => {
  let component: VisitingCardComponent;
  let fixture: ComponentFixture<VisitingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
