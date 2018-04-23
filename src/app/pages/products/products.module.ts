import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductsComponent } from './products.component';


@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    ProductsComponent
  ],
})
export class ProductsModule { }
