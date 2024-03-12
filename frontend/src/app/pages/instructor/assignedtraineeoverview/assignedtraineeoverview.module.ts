import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssignedtraineeoverviewPageRoutingModule } from './assignedtraineeoverview-routing.module';
import { AssignedtraineeoverviewPage } from './assignedtraineeoverview.page';

/**
 ** AssignedtraineeoverviewPageModule
 * imports the modules for the assignedtraineeoverview page
 *
 * @export
 * @class AssignedtraineeoverviewPageModule
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignedtraineeoverviewPageRoutingModule,
  ],
  declarations: [AssignedtraineeoverviewPage],
})
export class AssignedtraineeoverviewPageModule {}
