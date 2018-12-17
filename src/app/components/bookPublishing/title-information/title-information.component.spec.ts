import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleInformationComponent } from './title-information.component';

describe('TitleInformationComponent', () => {
  let component: TitleInformationComponent;
  let fixture: ComponentFixture<TitleInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
