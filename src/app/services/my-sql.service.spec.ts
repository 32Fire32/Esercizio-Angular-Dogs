import { TestBed } from '@angular/core/testing';

import { MySqlService } from './my-sql.service';

describe('MySqlService', () => {
  let service: MySqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
