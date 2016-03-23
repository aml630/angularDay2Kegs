import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg';
import {KegListComponent} from './keg-list.component';
import {AppComponent} from './app.component';



@Component ({
  selector: 'new-keg',
  outputs: ['newKegClick'],
  template: `
  <h1>Lets tap a new keg!</h1>
  <form>
  <input placeholder = "Keg Name" #newBeer>
  <button class = "btn btn-info" (click)="addKeg(newBeer.value)">Beer</button>
  </form>
  <div>New Beer Created: {{newBeer.value}}</div>

  `
})

export class NewKegComponent {
  public newKegClick: EventEmitter<string>;
  constructor() {
    this.newKegClick = new EventEmitter();
  }

  addKeg(type: string) {
    this.newKegClick.emit(type);
  }


}
