import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MostarComponent } from './mostar/mostar.component';
import { BreakrComponent } from './breakr/breakr.component';




@NgModule({
  declarations: [
    HomeComponent,
    MostarComponent,
    BreakrComponent
  ],
  imports: [
    CommonModule,
    


  ],
  exports:[
    HomeComponent,
    MostarComponent,
    BreakrComponent
  ]

})
export class PagesModule { }
