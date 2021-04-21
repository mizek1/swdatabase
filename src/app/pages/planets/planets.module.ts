import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  imports: [
    PlanetsRoutingModule,
    CommonModule,
    NzCardModule,
    NzDividerModule,
    NzSpaceModule,
    NzGridModule,
    NzLayoutModule,
    NzTypographyModule,
    NzListModule,
    NzInputModule,
    NzIconModule,
  ],
  declarations: [
    PlanetsComponent,
  ],
  exports: [PlanetsComponent]
})
export class PlanetsModule { }
