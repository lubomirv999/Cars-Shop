import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsBuyFailedComponent } from './parts-buy-failed.component';

describe('PartsBuyFailedComponent', () => {
  let component: PartsBuyFailedComponent;
  let fixture: ComponentFixture<PartsBuyFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsBuyFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsBuyFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
