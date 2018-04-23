import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: 'dashboard',
    //   component: DashboardComponent,
    // },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: 'careers',
      component: CareersComponent,
    },
    {
      path: 'about-us',
      component: AboutUsComponent,
    },
    {
      path: 'contact-us',
      component: ContactUsComponent,
    }
    , {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
