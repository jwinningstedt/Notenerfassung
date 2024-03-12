import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

/**
 ** LoginPageModule
 * imports the modules for the login page
 *
 * @export
 * @class LoginPageModule
 */
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoginPageRoutingModule],
  declarations: [LoginPage],
})
export class LoginPageModule {}
