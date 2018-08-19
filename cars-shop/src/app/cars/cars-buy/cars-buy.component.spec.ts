import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsBuyComponent } from './cars-buy.component';

describe('CarsBuyComponent', () => {
  let component: CarsBuyComponent;
  let fixture: ComponentFixture<CarsBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
