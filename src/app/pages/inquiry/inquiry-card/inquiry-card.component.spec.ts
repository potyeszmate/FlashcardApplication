import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryCardComponent } from './inquiry-card.component';

describe('InquiryCardComponent', () => {
  let component: InquiryCardComponent;
  let fixture: ComponentFixture<InquiryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
