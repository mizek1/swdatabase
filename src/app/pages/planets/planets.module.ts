import { PlanetCardModule } from './../../components/planetCard/planetCard.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PlanetsRoutingModule } from './planets-routing.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { PlanetModule } from '../planet/planet.module';

@NgModule({
  imports: [
    PlanetsRoutingModule,
    PlanetModule,
    PlanetCardModule,
    FormsModule,
    CommonModule,
    NzGridModule,
    NzTypographyModule,
    NzListModule,
    NzInputModule,
    NzIconModule,
    NzSpinModule,
    NzButtonModule,
    NzEmptyModule,
    NzPaginationModule,
    NzModalModule,
  ],
  declarations: [
    PlanetsComponent,
  ],
  exports: [PlanetsComponent]
})
export class PlanetsModule { }
