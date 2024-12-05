import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRickAndMorty } from '../interfaces/rickAndMorty.interface';

@Injectable({
  providedIn: 'root'
})


export class ExampleService {

  RickAndMortyURL:string = "https://rickandmortyapi.com/api/character/";
  constructor(
    private http : HttpClient
  ) {

  }
  ObtenerDatos(){
    return this.http.get<IRickAndMorty>(this.RickAndMortyURL);
  }
}
