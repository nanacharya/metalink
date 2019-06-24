import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInternetGraphComponent } from './check-internet-graph.component';

describe('CheckInternetGraphComponent', () => {
  let component: CheckInternetGraphComponent;
  let fixture: ComponentFixture<CheckInternetGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInternetGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInternetGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
