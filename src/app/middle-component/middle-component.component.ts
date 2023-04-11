import { Component } from '@angular/core';
import { Note } from '../models/note.model';


@Component({
  selector: 'app-middle-component',
  templateUrl: './middle-component.component.html',
  styleUrls: ['./middle-component.component.scss']
})
export class MiddleComponentComponent {


  items = [
    { id: 1, name: 'UI concepts worth existing', content: 'Some UI concepts worth checking out', hovered: false, removed: false, class: "card1" },
    { id: 2, name: 'Book Review: The Design of Everyday Things by Don Norman', content: 'A great book about UX design', hovered: false, removed: false, class: "card2" },
    { id: 3, name: 'Animes produced by Ufotable', content: 'Some of the best anime out there', hovered: false, removed: false,class: "card3" },
    { id: 4, name: 'Mangas planned to read', content: 'A list of manga that I want to read', hovered: false, removed: false,class: "card4" },
    { id: 5, name: 'Awesome tweets collection', content: 'A collection of awesome tweets that I have found', hovered: false, removed: false,class: "card5" },
    { id: 6, name: 'List of free & open source apps', content: 'A list of free and open source apps that I recommend', hovered: false, removed: false,class: "card6" }
  ];
  

  
}