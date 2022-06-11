import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotRegisterComponent } from './definitely-not-register.component';

describe('DefinitelyNotRegisterComponent', () => {
  let component: DefinitelyNotRegisterComponent;
  let fixture: ComponentFixture<DefinitelyNotRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
