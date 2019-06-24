import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferOffferComponent } from './refer-offfer.component';

describe('ReferOffferComponent', () => {
  let component: ReferOffferComponent;
  let fixture: ComponentFixture<ReferOffferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferOffferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferOffferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
