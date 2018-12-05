import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";
import { GetDataService } from './get-data.service';

describe('GetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [GetDataService]
    });
  });

  it('should be created', inject([GetDataService], (service: GetDataService) => {
    expect(service).toBeTruthy();
  }));
});
