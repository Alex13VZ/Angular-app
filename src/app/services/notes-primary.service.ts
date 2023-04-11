import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesPrimaryService {


  constructor(private http: HttpClient) { }
  getPokemon(): Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");

  }

  doSomething() {
    console.log("test");
  }

  createOperatorsExample() {
    const source = of(1, 2, 3, 4, 5);

    const result = source.pipe(
      filter((numbers: any) => numbers % 2 === 0),
      map((numbers: any) => numbers * 2)

    );

    const sub = result.subscribe(value => {
      console.log(value);
    })

    setTimeout(() => {
      sub.unsubscribe();
      console.log('unsubscribed!');
    }, 5000);
  }


  createOperatorsExample2() {
    const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const filteredSource = source.pipe(
      filter(number => number % 2 === 0));

    const sub = filteredSource.subscribe(number => {
      console.log(`Even number: ${number}`);
    })


  }

  createOperatorsExample3() {
    const source = from(['salut', 'world', 'rxjs']);

    const transformedSource = source.pipe(
      map(str => str.toUpperCase())
    );
    const sub = transformedSource.subscribe(uppercaseStr => {
      console.log(`Uppercase string : ${uppercaseStr}`);
    })
  }


  createOperatorsExample4() {
    const source = from([{
      name: "alex",
      age: 33


    }, {
      name: "ana",
      age: 25
    }, {
      name: "maria",
      age: 18
    }])


    const transformedSource= source.pipe(
      filter(person => person.age >= 25),
      map(person => person.name.toUpperCase()))


      const sub = transformedSource.subscribe(uppercaseStr => {
        console.log(`Uppercase string : ${uppercaseStr}`);
      })

    
  }



}
