import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardDeleteComponent } from './flashcard-delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    FlashcardDeleteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    
  ],
  exports: [
    FlashcardDeleteComponent
  ],
})
export class FlashcardDeleteModule { }
