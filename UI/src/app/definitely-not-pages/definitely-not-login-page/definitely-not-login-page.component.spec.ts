import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotLoginPageComponent } from './definitely-not-login-page.component';

describe('DefinitelyNotLoginPageComponent', () => {
  let component: DefinitelyNotLoginPageComponent;
  let fixture: ComponentFixture<DefinitelyNotLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
