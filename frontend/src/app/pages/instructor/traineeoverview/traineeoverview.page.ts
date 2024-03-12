import { Component } from '@angular/core';

/**
 ** TraineeoverviewPage
 ** page shows the instructor, data of all trainees
 *
 ** searchbar component
 * filter table by:
 * trainee name
 *
 ** table component:
 ** sort component:
 * sort table by
 * trainee name
 * trainee ID
 *
 * table data:
 * button: assign / reject trainee to the instructor
 * trainee name
 * trainee ID
 * button: delete trainee
 *
 ** click on table row: route to gradeoverview of this trainee
 *
 ** accessible:
 * all instructors
 *
 * @export
 * @class TraineeoverviewPage
 */
@Component({
  selector: 'app-traineeoverview',
  templateUrl: './traineeoverview.page.html',
  styleUrls: ['./traineeoverview.page.scss'],
})
export class TraineeoverviewPage {
  constructor() {}
}
