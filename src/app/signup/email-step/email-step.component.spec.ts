import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailStepComponent } from './email-step.component';

describe('EmailStepComponent', () => {
  let component: EmailStepComponent;
  let fixture: ComponentFixture<EmailStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
