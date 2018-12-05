import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpricingComponent } from './setpricing.component';

describe('SetpricingComponent', () => {
  let component: SetpricingComponent;
  let fixture: ComponentFixture<SetpricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
