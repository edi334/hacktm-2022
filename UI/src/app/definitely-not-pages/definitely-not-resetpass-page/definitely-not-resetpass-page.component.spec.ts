import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotResetpassPageComponent } from './definitely-not-resetpass-page.component';

describe('DefinitelyNotResetpassPageComponent', () => {
  let component: DefinitelyNotResetpassPageComponent;
  let fixture: ComponentFixture<DefinitelyNotResetpassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotResetpassPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotResetpassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
