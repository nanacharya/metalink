import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderservicesComponent } from './headerservices.component';

describe('HeaderservicesComponent', () => {
  let component: HeaderservicesComponent;
  let fixture: ComponentFixture<HeaderservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
