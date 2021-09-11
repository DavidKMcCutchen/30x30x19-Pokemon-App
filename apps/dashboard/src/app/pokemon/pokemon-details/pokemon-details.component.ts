import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Pokemon } from "@pokemon/api-interfaces";

@Component({
  selector: 'pokemon-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  currentPokemon: Pokemon;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set pokemon(value) {
    if (value) this.originalTitle = value.name;
    this.currentPokemon = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
