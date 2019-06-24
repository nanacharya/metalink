import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionWidgetComponent } from './exception-widget.component';

describe('ExceptionWidgetComponent', () => {
  let component: ExceptionWidgetComponent;
  let fixture: ComponentFixture<ExceptionWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
