import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './portafolio.component';



@NgModule({
  declarations: [PortafolioComponent],
  imports: [
    CommonModule
  ],
  exports:[PortafolioComponent]
})
export class PortafolioModule { }
