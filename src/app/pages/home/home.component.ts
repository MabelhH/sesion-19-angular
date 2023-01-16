import { Component ,OnInit } from '@angular/core';
import {PokemonService } from 'src/app/servicios/pokemon.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  input:any=[];
  constructor(private datos:PokemonService){}
  
  ngOnInit(): void {
    //this.datos.getPokemon().subscribe(datos =>console.log(datos));
    this.datos.getPokemon().subscribe(datos=>this.input=datos);

  }


}
