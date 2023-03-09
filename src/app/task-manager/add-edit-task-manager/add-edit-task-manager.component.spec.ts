import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTaskManagerComponent } from './add-edit-task-manager.component';

describe('AddEditTaskManagerComponent', () => {
  let component: AddEditTaskManagerComponent;
  let fixture: ComponentFixture<AddEditTaskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTaskManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
