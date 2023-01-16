import { Injectable,  } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlBase="https://pokeapi.co/api/v2";

  constructor(private http:HttpClient) { 
    console.log('pokemon')
  }


  getPokemon(index: string){
    return this.http.get<any>(`${this.urlBase}/pokemon/${index}`);
  }  
  
}

