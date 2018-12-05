import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendforReviewComponent } from './sendfor-review.component';

describe('SendforReviewComponent', () => {
  let component: SendforReviewComponent;
  let fixture: ComponentFixture<SendforReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendforReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendforReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
