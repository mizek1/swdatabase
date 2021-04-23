import { FormsModule } from '@angular/forms';
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
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  imports: [
    PlanetsRoutingModule,
    FormsModule,
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
    NzSpinModule,
    NzButtonModule,
    NzEmptyModule,
    NzPaginationModule,
  ],
  declarations: [
    PlanetsComponent,
  ],
  exports: [PlanetsComponent]
})
export class PlanetsModule { }
