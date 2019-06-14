import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustNavbarComponent } from './create-cust-navbar.component';

describe('CreateCustNavbarComponent', () => {
  let component: CreateCustNavbarComponent;
  let fixture: ComponentFixture<CreateCustNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
