import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPipeComponent } from './track-pipe.component';

describe('TrackPipeComponent', () => {
  let component: TrackPipeComponent;
  let fixture: ComponentFixture<TrackPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
