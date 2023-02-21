import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditNoteRoutingModule } from './edit-note-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { EditNoteComponent } from './edit-note.component';

@NgModule({
  declarations: [EditNoteComponent],
  imports: [
    CommonModule,
    EditNoteRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [EditNoteComponent],
})
export class EditNoteModule {}
