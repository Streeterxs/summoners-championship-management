import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DoubleEliminationTreeComponent} from './double-elimination-tree.component';

const components = [DoubleEliminationTreeComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class NgttDoubleEliminationTreeModule {
}
