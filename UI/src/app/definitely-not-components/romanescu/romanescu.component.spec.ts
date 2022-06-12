import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanescuComponent } from './romanescu.component';

describe('RomanescuComponent', () => {
  let component: RomanescuComponent;
  let fixture: ComponentFixture<RomanescuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanescuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanescuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
