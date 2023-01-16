import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private  urlApi='https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
 
  constructor(private http:HttpClient) { 
    console.log('pokemon');
  }

  getPokemon():Observable<string[]>{
    return this.http.get<string[]>(this.urlApi)
  }
  
}

