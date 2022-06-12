import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotBoxPopupComponent } from './definitely-not-box-popup.component';

describe('DefinitelyNotBoxPopupComponent', () => {
  let component: DefinitelyNotBoxPopupComponent;
  let fixture: ComponentFixture<DefinitelyNotBoxPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotBoxPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotBoxPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
