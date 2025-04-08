import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercasepipeComponent } from './lowercasepipe.component';

describe('LowercasepipeComponent', () => {
  let component: LowercasepipeComponent;
  let fixture: ComponentFixture<LowercasepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowercasepipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowercasepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
