import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { SearchScreenComponent } from './search-screen/search-screen.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchScreenComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
  ]
})
export class CustomerModule { }
