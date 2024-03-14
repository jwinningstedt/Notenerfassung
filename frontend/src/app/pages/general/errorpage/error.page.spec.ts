import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ErrorPage } from './error.page';

describe('ErrorpagePage', () => {
  let component: ErrorPage;
  let fixture: ComponentFixture<ErrorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
