import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';
import { ExampleComponent } from './example.component';



@NgModule({
  declarations: [
    ExampleComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
  ],
})
export class ExampleModule { }
