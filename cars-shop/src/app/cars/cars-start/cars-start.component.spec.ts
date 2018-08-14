import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsStartComponent } from './cars-start.component';

describe('CarsStartComponent', () => {
  let component: CarsStartComponent;
  let fixture: ComponentFixture<CarsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
