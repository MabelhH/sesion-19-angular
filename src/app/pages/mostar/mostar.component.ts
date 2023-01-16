import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/servicios/pokemon.service';
import { ThisReceiver } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mostar',
  templateUrl: './mostar.component.html',
  styleUrls: ['./mostar.component.css']
})
export class MostarComponent {
  data:any[] = [];
  enviar:string|null='';
  description:number=0;


  constructor(private pokedex:PokemonService ,private router:ActivatedRoute ,private location:Location , ){}
  
  ngOnInit(): void {
    //this.datos.getAll().subscribe(datos =>console.log(datos));
    this.enviar=this.router.snapshot.paramMap.get('id');
    if(this.enviar!=null){
      this.pokedex.getPokemon(this.enviar).subscribe(res=>this.data.push(res))
    }

  }

    goback():void{
    this.location.back();
   }
}
