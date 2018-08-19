import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsStartComponent } from './parts-start.component';

describe('PartsStartComponent', () => {
  let component: PartsStartComponent;
  let fixture: ComponentFixture<PartsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
