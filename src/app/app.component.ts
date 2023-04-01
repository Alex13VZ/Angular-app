import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnChanges{
  title = 'angular-app';


  ngOnInit() {
    console.log("salut");
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
