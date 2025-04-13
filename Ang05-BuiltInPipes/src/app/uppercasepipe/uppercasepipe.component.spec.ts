import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercasepipeComponent } from './uppercasepipe.component';

describe('UppercasepipeComponent', () => {
  let component: UppercasepipeComponent;
  let fixture: ComponentFixture<UppercasepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UppercasepipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppercasepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
