import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardAddComponent } from './flashcard-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [FlashcardAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,

  ],
  exports: [
    FlashcardAddComponent,
    
  ]
})
export class FlashcardAddModule { }
