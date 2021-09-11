import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSubComponent } from './pokemon-sub.component';

describe('PokemonSubComponent', () => {
  let component: PokemonSubComponent;
  let fixture: ComponentFixture<PokemonSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
