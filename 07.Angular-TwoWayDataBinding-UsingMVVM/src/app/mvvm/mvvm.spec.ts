import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mvvm } from './mvvm';

describe('Mvvm', () => {
  let component: Mvvm;
  let fixture: ComponentFixture<Mvvm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mvvm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mvvm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
