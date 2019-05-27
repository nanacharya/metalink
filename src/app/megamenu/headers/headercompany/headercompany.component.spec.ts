import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercompanyComponent } from './headercompany.component';

describe('HeadercompanyComponent', () => {
  let component: HeadercompanyComponent;
  let fixture: ComponentFixture<HeadercompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadercompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
