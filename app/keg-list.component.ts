import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg';
import {NewKegComponent} from './new-keg.component';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegClick'],
  template: `
    <div>**Import from keg-list.component working</div>
      <div *ngFor="#keg of kegList" (click)="kegClicked(keg)"
      [class.selected]="keg === clickedKeg"
      >
      <ul>
      <li>Type: {{keg.type}}</li>
      <li>Price: $ {{keg.price}}</li>
      <li>ID: {{keg.id}}</li>
      </ul>
    </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public clickedKeg: Keg;
  public onKegClick: EventEmitter<Keg>;
  constructor(){
    this.onKegClick = new EventEmitter();

  }
  kegClicked(clickedKeg: Keg): void {
    this.clickedKeg = clickedKeg;
    this.onKegClick.emit(clickedKeg);

    console.log(clickedKeg);
  }
}
