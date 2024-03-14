import { Injectable } from '@angular/core';
import { IHeader } from '../interfaces/IHeader';

/**
 ** ConfigService
 * sets the main config of the pages
 *
 * @export
 * @class ConfigService
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    // set the header properties
    header: IHeader = { title: 'Notenerfassung', logo: 'assets/icon/Indamed_App_Icons_Final.png', toolbarBackgroundColor:'white' };
}
