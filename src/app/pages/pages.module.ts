import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MostarComponent } from './mostar/mostar.component';



@NgModule({
  declarations: [
    HomeComponent,
    MostarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
