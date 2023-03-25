import { Component } from '@angular/core';
import { Note } from '../models/note.model';


@Component({
  selector: 'app-middle-component',
  templateUrl: './middle-component.component.html',
  styleUrls: ['./middle-component.component.scss']
})
export class MiddleComponentComponent {

  notes: Note[] = [{
    description: "text",
    color: "red",
    id: 1,
    title: "titlu"
  }]
}
