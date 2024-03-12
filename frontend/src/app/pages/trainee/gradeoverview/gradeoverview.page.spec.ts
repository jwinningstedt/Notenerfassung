import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradeoverviewPage } from './gradeoverview.page';

describe('GradeoverviewPage', () => {
  let component: GradeoverviewPage;
  let fixture: ComponentFixture<GradeoverviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GradeoverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
