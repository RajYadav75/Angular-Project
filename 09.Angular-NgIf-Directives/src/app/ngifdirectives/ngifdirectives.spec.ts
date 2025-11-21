import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngifdirectives } from './ngifdirectives';

describe('Ngifdirectives', () => {
  let component: Ngifdirectives;
  let fixture: ComponentFixture<Ngifdirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ngifdirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngifdirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
