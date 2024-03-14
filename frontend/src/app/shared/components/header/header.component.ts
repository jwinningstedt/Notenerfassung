import { ConfigService } from './../../services/Config.service';
import { Component, OnInit } from '@angular/core';
import { IHeader } from '../../interfaces/IHeader';
/**
 ** Header Component
 * represents the main header of the pages
 ** used in:
 * LoginPage
 * GradeoverviewPage
 * TraineeoverviewPage
 * AssignedtraineeoverviewPage
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ConfigService: ConfigService) { }
  public header: IHeader | undefined;

  ngOnInit() {
    this.header = this.ConfigService.header;
  }
}
