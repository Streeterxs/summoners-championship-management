import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
