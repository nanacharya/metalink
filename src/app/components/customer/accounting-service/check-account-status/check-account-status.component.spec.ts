import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAccountStatusComponent } from './check-account-status.component';

describe('CheckAccountStatusComponent', () => {
  let component: CheckAccountStatusComponent;
  let fixture: ComponentFixture<CheckAccountStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAccountStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAccountStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
