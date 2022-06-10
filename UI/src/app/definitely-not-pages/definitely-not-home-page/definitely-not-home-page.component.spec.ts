import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotHomePageComponent } from './definitely-not-home-page.component';

describe('DefinitelyNotHomePageComponent', () => {
  let component: DefinitelyNotHomePageComponent;
  let fixture: ComponentFixture<DefinitelyNotHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
