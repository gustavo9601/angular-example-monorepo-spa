import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebasRoutingModule } from './pruebas-routing.module';
import { OtroComponent } from './otro/otro.component';


@NgModule({
  declarations: [
    OtroComponent
  ],
  imports: [
    CommonModule,
    PruebasRoutingModule
  ]
})
export class PruebasModule { }
