import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraineeoverviewPage } from './traineeoverview.page';

describe('TraineeoverviewPage', () => {
  let component: TraineeoverviewPage;
  let fixture: ComponentFixture<TraineeoverviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TraineeoverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
