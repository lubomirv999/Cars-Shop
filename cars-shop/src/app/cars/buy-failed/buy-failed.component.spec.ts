import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFailedComponent } from './buy-failed.component';

describe('BuyFailedComponent', () => {
  let component: BuyFailedComponent;
  let fixture: ComponentFixture<BuyFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
