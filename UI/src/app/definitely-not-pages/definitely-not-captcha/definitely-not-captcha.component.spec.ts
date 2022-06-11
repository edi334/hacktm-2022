import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotCaptchaComponent } from './definitely-not-captcha.component';

describe('DefinitelyNotCaptchaComponent', () => {
  let component: DefinitelyNotCaptchaComponent;
  let fixture: ComponentFixture<DefinitelyNotCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotCaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
