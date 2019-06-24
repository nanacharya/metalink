import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandwidthSelectorComponent } from './bandwidth-selector.component';

describe('BandwidthSelectorComponent', () => {
  let component: BandwidthSelectorComponent;
  let fixture: ComponentFixture<BandwidthSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandwidthSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandwidthSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
