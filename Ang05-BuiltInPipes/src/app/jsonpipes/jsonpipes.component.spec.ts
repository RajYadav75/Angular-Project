import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpipesComponent } from './jsonpipes.component';

describe('JsonpipesComponent', () => {
  let component: JsonpipesComponent;
  let fixture: ComponentFixture<JsonpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonpipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
