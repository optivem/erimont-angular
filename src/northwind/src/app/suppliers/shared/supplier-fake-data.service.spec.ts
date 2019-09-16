import { TestBed } from '@angular/core/testing';

import { SupplierFakeDataService } from './supplier-fake-data.service';

describe('SupplierFakeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierFakeDataService = TestBed.get(SupplierFakeDataService);
    expect(service).toBeTruthy();
  });
});
