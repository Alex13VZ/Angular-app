import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotesPrimaryService } from '../services/notes-primary.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnChanges, OnInit {
  somePolemonSource$: any;
  somePokemonSource$: any;
  constructor (private notesService: NotesPrimaryService){

  }

  @Input() notes = "";
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(){
    this.notesService.doSomething();
    this.notesService.getPokemon().subscribe((res)=>{
      console.log(res, 'this is the requested pokemon')
    })

    this.notesService.createOperatorsExample4();

   this.somePokemonSource$ = this.notesService.getPokemon();
  }





}
