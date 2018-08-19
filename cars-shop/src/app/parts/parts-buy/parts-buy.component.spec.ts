import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsBuyComponent } from './parts-buy.component';

describe('PartsBuyComponent', () => {
  let component: PartsBuyComponent;
  let fixture: ComponentFixture<PartsBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
