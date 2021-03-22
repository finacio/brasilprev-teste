import { TestBed } from '@angular/core/testing';

import { AllPokemonsService } from './all-pokemons.service';

describe('AllPokemonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllPokemonsService = TestBed.get(AllPokemonsService);
    expect(service).toBeTruthy();
  });
});
