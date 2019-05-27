import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercarrerComponent } from './headercarrer.component';

describe('HeadercarrerComponent', () => {
  let component: HeadercarrerComponent;
  let fixture: ComponentFixture<HeadercarrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadercarrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
