import { Component, OnInit } from '@angular/core';

/**
 ** GradeoverviewPage
 ** page shows the trainee himself and the instructor, then the trainee is assigned, data of this trainee
 *
 ** searchbar component
 * filter table by subject name
 *
 ** table component:
 ** sort component:
 * sort table by the year of acquiring the grade
 *
 * table includes the following data:
 ** button: open options
 * button: change subject name
 * button: add grade to subject
 * button: delete subject
 *
 * the name of the subject
 *
 ** click on table row: appears a new table
 * table includes the following data:
 * the date, when the grade got achieved
 * the value of the grade
 * a button to delete the grade
 * in the last row, the grade point average, of the specific subject got displayed
 *
 ** includes a button, to add a subject to the trainee
 *
 ** accessible
 * by the trainee himself
 * by the instructor, then the trainee is assigned to him
 *
 * @export
 * @class GradeoverviewPage
 */
@Component({
  selector: 'app-gradeoverview',
  templateUrl: './gradeoverview.page.html',
  styleUrls: ['./gradeoverview.page.scss'],
})
export class GradeoverviewPage {
  constructor() {}
}
