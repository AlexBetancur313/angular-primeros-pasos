import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  // Define que peude tener una property que sera llamada en un caracterlist, si no manda nada el valor que tendra por defecto sera el que creamos acá
  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Thunk',
      power: 10,
    },
  ];

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    // console.log(index);

    if (!id) return;
    this.onDelete.emit(id);
  }
}
