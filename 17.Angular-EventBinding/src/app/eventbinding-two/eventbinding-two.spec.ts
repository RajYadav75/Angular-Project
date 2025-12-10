import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingTwo } from './eventbinding-two';

describe('EventbindingTwo', () => {
  let component: EventbindingTwo;
  let fixture: ComponentFixture<EventbindingTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventbindingTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventbindingTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
