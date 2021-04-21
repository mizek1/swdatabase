import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule,
            CommonModule,
            NzCardModule,
            NzDividerModule,
            NzSpaceModule,
            NzGridModule,
            NzLayoutModule
          ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
