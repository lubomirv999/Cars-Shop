import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPartsComponent } from './my-parts.component';

describe('MyPartsComponent', () => {
  let component: MyPartsComponent;
  let fixture: ComponentFixture<MyPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
