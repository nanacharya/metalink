import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbillpaymentComponent } from './headerbillpayment.component';

describe('HeaderbillpaymentComponent', () => {
  let component: HeaderbillpaymentComponent;
  let fixture: ComponentFixture<HeaderbillpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderbillpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderbillpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
