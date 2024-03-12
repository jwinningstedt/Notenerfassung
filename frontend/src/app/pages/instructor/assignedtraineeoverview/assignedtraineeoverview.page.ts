import { Component } from '@angular/core';

/**
 ** AssignedtraineeoverviewPage
 ** page shows the instructor, data of trainees, assigned to him
 *
 ** searchbar component
 * filter table by:
 * trainee name
 *
 ** table component:
 ** sort component:
 * sort table by:
 * trainee name
 * trainee ID
 *
 * table data:
 * trainee name 
 * trainee ID
 *
 ** click on table row: appears a new table
 * table data:
 * subject name 
 * grade point average
 * 
 ** click on table row: route to gradeoverview of this trainee

 ** accessible:
 * instructor, then the specific trainee is assigned to him
 *
 * @export
 * @class AssignedtraineeoverviewPage
 */
@Component({
  selector: 'app-assignedtraineeoverview',
  templateUrl: './assignedtraineeoverview.page.html',
  styleUrls: ['./assignedtraineeoverview.page.scss'],
})
export class AssignedtraineeoverviewPage {
  constructor() {}
}
