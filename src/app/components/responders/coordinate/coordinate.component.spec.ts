import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateComponent } from './coordinate.component';

describe('CoordinateComponent', () => {
  let component: CoordinateComponent;
  let fixture: ComponentFixture<CoordinateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
