import { TestBed } from '@angular/core/testing';

import { TaskManagerApiService } from './task-manager-api.service';

describe('TaskManagerApiService', () => {
  let service: TaskManagerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
