import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNotFoundComponent } from './pokemon-not-found.component';

describe('PokemonNotFoundComponent', () => {
  let component: PokemonNotFoundComponent;
  let fixture: ComponentFixture<PokemonNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
