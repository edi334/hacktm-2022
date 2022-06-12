import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitelyNotFolderComponent } from './definitely-not-folder.component';

describe('DefinitelyNotFolderComponent', () => {
  let component: DefinitelyNotFolderComponent;
  let fixture: ComponentFixture<DefinitelyNotFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitelyNotFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitelyNotFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
