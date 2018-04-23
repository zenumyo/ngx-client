import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { ProductsModule } from './products/products.module';
import { CareersModule } from './careers/careers.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsModule } from './contact-us/about-us.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/products.module';
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    ProductsModule,
    CareersModule,
    AboutUsModule,
    ContactUsModule,
    HomeModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ],
})
export class PagesModule {
}
