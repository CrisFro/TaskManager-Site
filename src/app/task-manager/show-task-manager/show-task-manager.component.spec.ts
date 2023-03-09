import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTaskManagerComponent } from './show-task-manager.component';

describe('ShowTaskManagerComponent', () => {
  let component: ShowTaskManagerComponent;
  let fixture: ComponentFixture<ShowTaskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTaskManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
