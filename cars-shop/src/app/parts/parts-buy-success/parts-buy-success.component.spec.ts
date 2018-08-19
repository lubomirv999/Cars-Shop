import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsBuySuccessComponent } from './parts-buy-success.component';

describe('PartsBuySuccessComponent', () => {
  let component: PartsBuySuccessComponent;
  let fixture: ComponentFixture<PartsBuySuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsBuySuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsBuySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
