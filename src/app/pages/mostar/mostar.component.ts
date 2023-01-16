import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/servicios/pokemon.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-mostar',
  templateUrl: './mostar.component.html',
  styleUrls: ['./mostar.component.css']
})
export class MostarComponent {
  data:any[] = [];
  enviar:string|null='';
  description:number=0;

  constructor(private pokedex:PokemonService ,private router:ActivatedRoute ,private location:Location){}
  
  ngOnInit():void{
    this.getPokemons()
    this.enviar=this.router.snapshot.paramMap.get('i'); 
    if(this.enviar!=null){
    this.description=parseInt(this.enviar);
  }
  }

  getPokemons(){

    let pokemonData;

    for(let i = 1; i < 150; i++){

      this.pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }
          this.data.push(pokemonData)
          console.log(res);
        },
        err => {
  
        }
      )

    }
    
  }


  goback():void{
    this.location.back();
   }
}
