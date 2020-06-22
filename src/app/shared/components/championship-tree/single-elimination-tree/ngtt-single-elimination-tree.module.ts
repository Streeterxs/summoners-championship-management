import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SingleEliminationTreeComponent} from './single-elimination-tree.component';

const components = [SingleEliminationTreeComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class NgttSingleEliminationTreeModule {
}
