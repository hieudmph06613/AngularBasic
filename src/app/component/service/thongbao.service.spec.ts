import { TestBed } from '@angular/core/testing';

import { ThongbaoService } from './thongbao.service';

describe('ThongbaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThongbaoService = TestBed.get(ThongbaoService);
    expect(service).toBeTruthy();
  });
});
