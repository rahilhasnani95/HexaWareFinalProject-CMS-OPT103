import { TestBed } from '@angular/core/testing';

import { PendingOrdersService } from './pending-orders.service';

describe('PendingOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingOrdersService = TestBed.get(PendingOrdersService);
    expect(service).toBeTruthy();
  });
});
