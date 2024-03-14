import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ErrorPageRoutingModule } from './error-routing.module';
import { ErrorPage } from './error.page';
import { HeaderModule } from 'src/app/shared/components/header.module';

/**
 ** ErrorPageModule
 * imports the modules for the error page
 *
 * @export
 * @class ErrorPageModule
 */
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ErrorPageRoutingModule, HeaderModule],
  declarations: [ErrorPage],
})
export class ErrorPageModule {}
