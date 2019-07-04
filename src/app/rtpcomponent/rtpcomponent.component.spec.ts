import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtpcomponentComponent } from './rtpcomponent.component';

describe('RtpcomponentComponent', () => {
  let component: RtpcomponentComponent;
  let fixture: ComponentFixture<RtpcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtpcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
