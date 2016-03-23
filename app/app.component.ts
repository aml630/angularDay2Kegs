import {Component} from 'angular2/core';
import {Keg} from './keg';
import {KegListComponent} from './keg-list.component';
import {NewKegComponent} from './new-keg.component';


@Component({
  selector: 'my-app',
  directives: [KegListComponent, NewKegComponent],
  // inputs: ['addedNewBeer'],
  template: `
    <div class = "container">
    <h1>hi</h1>
    <new-keg (newKegClick)="pushKeg($event)">{{ $event }}</new-keg>
    <keg-list [kegList] = "newKegList"
    (onKegClick) = "kegWasSelected($event)"
    >
    </keg-list>
    <button (newKegClick) = "pushKeg($event)">add</button>
    </div>
  `
})

export class AppComponent {
public newKegList: Keg[];
constructor(){
  this.newKegList = [
    new Keg("coolBeer", 5, 0),
    new Keg("yayBeer", 4, 1),
    new Keg("Amber", 5, 2),
    new Keg("Kirin", 6, 3),
    new Keg("Heff", 5, 4)
  ];
}
kegWasSelected(clickedKeg: Keg): void {
  console.log('parent: ' + clickedKeg.type);
}
pushKeg(type: string): void {
  var newKeg = new Keg(type, 5, this.newKegList.length);
  this.newKegList.push(newKeg);
  }
}
