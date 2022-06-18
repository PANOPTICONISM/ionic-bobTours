import { TestBed } from '@angular/core/testing';

import { BobToursService } from './bob-tours.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('BobToursService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, IonicStorageModule.forRoot()],
    })
  );

  it('should be created', () => {
    const service: BobToursService = TestBed.get(BobToursService);
    expect(service).toBeTruthy();
  });
});
