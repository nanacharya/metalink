import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTroubleTicketComponent } from './report-trouble-ticket.component';

describe('ReportTroubleTicketComponent', () => {
  let component: ReportTroubleTicketComponent;
  let fixture: ComponentFixture<ReportTroubleTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTroubleTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTroubleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
