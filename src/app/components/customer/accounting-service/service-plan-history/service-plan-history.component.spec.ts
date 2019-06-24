import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePlanHistoryComponent } from './service-plan-history.component';

describe('ServicePlanHistoryComponent', () => {
  let component: ServicePlanHistoryComponent;
  let fixture: ComponentFixture<ServicePlanHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePlanHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
