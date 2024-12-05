import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ExampleService } from '../services/example.service';
import { Observable, of } from 'rxjs';
// import { IRickAndMortyService } from '../interfaces/rickAndMortyService.interface';
import { mock } from '../mock/rickAndMorty.mock';
import { IRickAndMortyService } from '../interfaces/rickAndMortyService.interface';
 
// const mock:{
//   ObtenerDatos:() => Observable<any>
// } = {
//   ObtenerDatos: () => of({})
// }





describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [{
        provide:ExampleService, useValue:mock
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
