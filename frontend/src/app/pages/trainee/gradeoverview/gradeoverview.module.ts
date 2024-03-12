import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GradeoverviewPageRoutingModule } from './gradeoverview-routing.module';
import { GradeoverviewPage } from './gradeoverview.page';

/**
 ** GradeoverviewPageModule
 * imports the modules for the gradeoverview page
 *
 * @export
 * @class GradeoverviewPageModule
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradeoverviewPageRoutingModule,
  ],
  declarations: [GradeoverviewPage],
})
export class GradeoverviewPageModule {}
