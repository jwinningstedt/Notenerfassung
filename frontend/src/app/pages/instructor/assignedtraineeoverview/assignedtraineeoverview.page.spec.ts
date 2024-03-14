import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AssignedtraineeoverviewPage } from './assignedtraineeoverview.page';

describe('AssignedtraineeoverviewPage', () => {
  let component: AssignedtraineeoverviewPage;
  let fixture: ComponentFixture<AssignedtraineeoverviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssignedtraineeoverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
