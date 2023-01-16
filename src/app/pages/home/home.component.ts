import { Component ,OnInit } from '@angular/core';
import {PokemonService } from 'src/app/servicios/pokemon.service';
import { Router } from '@angular/router';
import { MostarComponent } from '../mostar/mostar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  data:any[] = [];
  //datasource = new
  pokemons = [];
  nombrebuscado:string='';

  constructor(private pokedex:PokemonService ,private router:Router){}

  ngOnInit():void{
    this.getPokemons()
  }

  getPokemons(){

    let pokemonData;

    for(let i = 1; i < 150; i++){

      this.pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            orden: res.order
          }
          this.data.push(pokemonData)
          console.log(res);
        },
        err => {
  
        }
      )

    }
    
    
  }
    
  

  
  mostrar(id:string){
    this.router.navigate(['/mostar',id ])

    
  }
  
  }

