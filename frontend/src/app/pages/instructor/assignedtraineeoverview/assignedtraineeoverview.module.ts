import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssignedtraineeoverviewPageRoutingModule } from './assignedtraineeoverview-routing.module';
import { AssignedtraineeoverviewPage } from './assignedtraineeoverview.page';
import { HeaderModule } from 'src/app/shared/components/header.module';

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
    HeaderModule
  ],
  declarations: [AssignedtraineeoverviewPage],
})
export class AssignedtraineeoverviewPageModule {}
