import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersupportComponent } from './headersupport.component';

describe('HeadersupportComponent', () => {
  let component: HeadersupportComponent;
  let fixture: ComponentFixture<HeadersupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
