import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes/services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
})
export class EditNoteComponent implements OnInit {
  private sub: any;
  id: number = 0;
  form = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    body: new FormControl(),
  });
  constructor(
    public noteService: NotesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  onUpdate() {
    console.warn(this.form.value);
    const { id, title, description, body } = this.form.value;
    this.noteService.updateNote(id, title, description, body);
    this.router.navigate(['/add-notes']);
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.sub = this.noteService.getNoteDetails(this.id);
      console.log(this.sub[0]);
      this.form.setValue({
        id: this.sub[0].id,
        title: this.sub[0].title,
        description: this.sub[0].description,
        body: this.sub[0].body,
      });
    });
  }
}
