import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardUpdateComponent } from './flashcard-update.component';

describe('FlashcardUpdateComponent', () => {
  let component: FlashcardUpdateComponent;
  let fixture: ComponentFixture<FlashcardUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
