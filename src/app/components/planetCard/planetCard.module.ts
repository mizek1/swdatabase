import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PlanetCardComponent } from './planetCard.component';

@NgModule({
  imports: [
    CommonModule,
    NzCardModule,
    NzDividerModule,
    NzTypographyModule,
    NzButtonModule,
    NzIconModule,
  ],
  declarations: [PlanetCardComponent],
  exports: [PlanetCardComponent],
})
export class PlanetCardModule { }
