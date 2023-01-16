import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MostarComponent } from './mostar/mostar.component';
import { BreakrComponent } from './breakr/breakr.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import{FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    HomeComponent,
    MostarComponent,
    BreakrComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule

    


  ],
  exports:[
    HomeComponent,
    MostarComponent,
    BreakrComponent
  ]

})
export class PagesModule { }
