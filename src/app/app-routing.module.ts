import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/add-notes',
    pathMatch: 'full',
  },
  {
    path: 'add-notes',
    loadChildren: () =>
      import('./modules/notes/notes.module').then((mod) => mod.NotesModule),
  },
  {
    path: 'edit-notes/:id',
    loadChildren: () =>
      import('./modules/edit-note/edit-note.module').then(
        (mod) => mod.EditNoteModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/notes/notes.module').then((mod) => mod.NotesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
