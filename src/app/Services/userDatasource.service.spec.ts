/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDatasourceService } from './userDatasource.service';

describe('Service: UserDatasource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDatasourceService]
    });
  });

  it('should ...', inject([UserDatasourceService], (service: UserDatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
