import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('FavoritesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()],
    })
  );

  it('should be created', () => {
    const service: FavoritesService = TestBed.get(FavoritesService);
    expect(service).toBeTruthy();
  });
});
