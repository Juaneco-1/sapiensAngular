import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContCaliComponent } from './cont-cali.component';

describe('ContCaliComponent', () => {
  let component: ContCaliComponent;
  let fixture: ComponentFixture<ContCaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContCaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContCaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
