import {NgModule} from '@angular/core';
import {NgttDoubleEliminationTreeModule} from './double-elimination-tree/ngtt-double-elimination-tree.module';
import {NgttSingleEliminationTreeModule} from './single-elimination-tree/ngtt-single-elimination-tree.module';

const modules = [NgttSingleEliminationTreeModule, NgttDoubleEliminationTreeModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class NgTournamentTreeModule {
}
