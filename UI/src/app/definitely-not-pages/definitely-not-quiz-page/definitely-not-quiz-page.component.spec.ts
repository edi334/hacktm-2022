import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotQuizPageComponent } from './definitely-not-quiz-page.component';

describe('DefinitelyNotQuizPageComponent', () => {
  let component: DefinitelyNotQuizPageComponent;
  let fixture: ComponentFixture<DefinitelyNotQuizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotQuizPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
