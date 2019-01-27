import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAppStepComponent } from './get-app-step.component';

describe('GetAppStepComponent', () => {
  let component: GetAppStepComponent;
  let fixture: ComponentFixture<GetAppStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAppStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAppStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
