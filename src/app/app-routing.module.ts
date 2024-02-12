import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './modules/authencation/component/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurant',
    pathMatch: 'full',
  },
  {
    path: 'restaurant',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/customer/customer.module').then(
            (m) => m.CustomerModule
          ),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
