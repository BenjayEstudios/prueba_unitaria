import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private rickAndMortyService : ExampleService
  ) {}

  ngOnInit(){
    this.rickAndMortyService.ObtenerDatos().subscribe({
      // next: () => {
      //   // console.log('Personajes Obtenidos');
      // },
    });
  }
}
