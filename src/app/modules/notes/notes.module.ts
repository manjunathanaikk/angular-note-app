import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteCreateComponent } from './component/note-create/note-create.component';
import { NoteListComponent } from './component/note-list/note-list.component';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes.component';

@NgModule({
  declarations: [NoteCreateComponent, NoteListComponent, NotesComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [NotesComponent, NoteListComponent, NoteCreateComponent],
})
export class NotesModule {}
