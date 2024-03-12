import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraineeoverviewPage } from './traineeoverview.page';

/**
 ** TraineeoverviewPageRoutingModule
 * declared the routes of the traineeoverview page
 *
 */
const routes: Routes = [
  {
    path: '',
    component: TraineeoverviewPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraineeoverviewPageRoutingModule {}
