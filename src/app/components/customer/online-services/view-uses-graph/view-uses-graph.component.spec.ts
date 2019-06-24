import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsesGraphComponent } from './view-uses-graph.component';

describe('ViewUsesGraphComponent', () => {
  let component: ViewUsesGraphComponent;
  let fixture: ComponentFixture<ViewUsesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
