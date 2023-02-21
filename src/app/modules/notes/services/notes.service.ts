import { Injectable } from '@angular/core';
import { Note } from '../../notes/notes.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Note[] = [
    {
      id: 1,
      title: 'Note 1',
      description: 'Lorem Ipsum',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 2,
      title: 'Note 2',
      description: 'Lorem Ipsum',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 3,
      title: 'Note 3',
      description: 'Lorem Ipsum',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ];
  private notesUpdated = new Subject<Note[]>();

  getNotes() {
    return [...this.notes];
  }

  getNoteUpdateListener() {
    return this.notesUpdated.asObservable();
  }

  addNote(title: string, description: string, body: string) {
    const lastId: number = this.notes[this.notes.length - 1]?.id ?? 1;
    const note: Note = {
      id: lastId,
      title: title,
      description: description,
      body: body,
    };
    this.notes.push(note);
    this.notesUpdated.next([...this.notes]);
  }

  setNotes(notes: Note[]) {
    this.notes = notes;
  }

  deleteNote(id: number) {
    const noteToDelete = this.notes.findIndex((note) => note.id === id);
    this.notes.splice(noteToDelete, 1);
  }
  getNoteDetails(id: number) {
    const noteToReturn = this.notes.filter((note) => note.id === id);
    return noteToReturn;
  }
  updateNote(id: number, title: string, description: string, body: string) {
    const noteToUpdate = this.notes.findIndex((note) => note.id === id);
    this.notes[noteToUpdate].title = title;
    this.notes[noteToUpdate].description = description;
    this.notes[noteToUpdate].body = body;
    console.log(this.notes);
  }
}
