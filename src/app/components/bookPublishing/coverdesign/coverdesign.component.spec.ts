import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverdesignComponent } from './coverdesign.component';

describe('CoverdesignComponent', () => {
  let component: CoverdesignComponent;
  let fixture: ComponentFixture<CoverdesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverdesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
