import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TraineeoverviewPageRoutingModule } from './traineeoverview-routing.module';
import { TraineeoverviewPage } from './traineeoverview.page';

/**
 ** TraineeoverviewPageModule
 * imports the modules for the traineeoverview page
 *
 * @export
 * @class TraineeoverviewPageModule
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraineeoverviewPageRoutingModule,
  ],
  declarations: [TraineeoverviewPage],
})
export class TraineeoverviewPageModule {}
