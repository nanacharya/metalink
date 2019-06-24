import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEPaymentHistoryComponent } from './view-epayment-history.component';

describe('ViewEPaymentHistoryComponent', () => {
  let component: ViewEPaymentHistoryComponent;
  let fixture: ComponentFixture<ViewEPaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEPaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
