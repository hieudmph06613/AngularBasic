import { TestBed } from '@angular/core/testing';

import { ThongBaoSVService } from './thong-bao-sv.service';

describe('ThongBaoSVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThongBaoSVService = TestBed.get(ThongBaoSVService);
    expect(service).toBeTruthy();
  });
});
