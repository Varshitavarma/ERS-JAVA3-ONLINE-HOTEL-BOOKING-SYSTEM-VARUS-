import { TestBed } from '@angular/core/testing';

import { bookDetailsService } from './bookdetails.service';

describe('BookdetailsService', () => {
  let service: bookDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(bookDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
