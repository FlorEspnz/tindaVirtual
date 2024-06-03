import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos.component';

@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductosComponent
  ]
})
export class ProductosModule { }
