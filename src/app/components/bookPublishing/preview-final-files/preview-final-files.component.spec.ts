import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFinalFilesComponent } from './preview-final-files.component';

describe('PreviewFinalFilesComponent', () => {
  let component: PreviewFinalFilesComponent;
  let fixture: ComponentFixture<PreviewFinalFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewFinalFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFinalFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
