import { Observable, of } from "rxjs";
import { mock } from "../mock/rickAndMorty.mock";
import { IRickAndMorty } from "./rickAndMorty.interface";

export const IRickAndMortyService: {
    ObtenerDatos: () => Observable<IRickAndMorty>
} = {
    ObtenerDatos: () => of(mock)
}