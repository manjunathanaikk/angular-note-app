import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css'],
})
export class NoteCreateComponent {
  constructor(public noteService: NotesService) {}

  onAddNote(form: NgForm) {
    if (form.invalid) return;
    const { title, description, body } = form.value;
    this.noteService.addNote(title, description, body);
    form.resetForm();
  }
}
