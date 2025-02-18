import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { mock } from '../mock/rickAndMorty.mock';
import { of } from 'rxjs';
describe('ExampleService', () => {
  let service: ExampleService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ExampleService(httpClientSpy);
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Obtener Datos', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mock));
    service.ObtenerDatos().subscribe({
      next: (response) => {
        expect(response).toEqual(mock);
        expect(httpClientSpy.get.calls.count()).toBe(1);
        expect(httpClientSpy.get.calls.first().args[0]).toBe('https://rickandmortyapi.com/api/character/')
        done();
      }
    });
  });

});
