import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotAButtonComponent } from './definitely-not-a-button.component';

describe('DefinitelyNotAButtonComponent', () => {
  let component: DefinitelyNotAButtonComponent;
  let fixture: ComponentFixture<DefinitelyNotAButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotAButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotAButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
