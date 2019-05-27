import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderonlineserviceComponent } from './headeronlineservice.component';

describe('HeaderonlineserviceComponent', () => {
  let component: HeaderonlineserviceComponent;
  let fixture: ComponentFixture<HeaderonlineserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderonlineserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderonlineserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
