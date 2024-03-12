import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeoverviewPage } from './gradeoverview.page';

/**
 ** GradeoverviewPageRoutingModule
 * declared the routes of the gradeoderview page
 *
 */
const routes: Routes = [
  {
    path: '',
    component: GradeoverviewPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradeoverviewPageRoutingModule {}
