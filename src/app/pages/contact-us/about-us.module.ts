import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ContactUsComponent } from './contact-us.component';


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    ContactUsComponent
  ],
})
export class ContactUsModule { }
