import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdistributionComponent } from './selectdistribution.component';

describe('SelectdistributionComponent', () => {
  let component: SelectdistributionComponent;
  let fixture: ComponentFixture<SelectdistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectdistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
