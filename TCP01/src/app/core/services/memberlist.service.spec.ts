import { TestBed } from '@angular/core/testing';

import { MemberlistService } from './memberlist.service';

describe('MemberlistService', () => {
  let service: MemberlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
