import { Component } from '@angular/core';

/**
 ** LoginPage
 ** start page, appears then the app gets started
 ** includes the login for trainee and instructor
 ** includes the register for the instructor
 *
 ** login component
 ** input component
 * includes the required input fields for the login
 * e-mail
 * password
 *
 ** button component
 * buttons with functions
 * login button: try to login, with the data of the inputs before
 * create instructor button: open modal for creating a new instructor
 *
 ** accessible:
 * all user
 *
 * @export
 * @class LoginPage
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor() {}
}
