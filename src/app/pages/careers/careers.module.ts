import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CareersComponent } from './careers.component';


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    CareersComponent
  ],
})
export class CareersModule { }
