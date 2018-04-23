import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AboutUsComponent } from './about-us.component';


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    AboutUsComponent
  ],
})
export class AboutUsModule { }
