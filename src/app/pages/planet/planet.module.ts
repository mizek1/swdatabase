import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanetComponent],
  exports: [PlanetComponent],
})
export class PlanetModule { }
