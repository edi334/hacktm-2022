import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotTopBarComponent } from './definitely-not-top-bar.component';

describe('DefinitelyNotTopBarComponent', () => {
  let component: DefinitelyNotTopBarComponent;
  let fixture: ComponentFixture<DefinitelyNotTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
