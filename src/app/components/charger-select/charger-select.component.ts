import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChargeService } from 'src/app/services/charge.service';
import { Charger } from 'src/app/model/charger';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-charger-select',
  templateUrl: './charger-select.component.html',
  styleUrls: ['./charger-select.component.scss']
})
export class ChargerSelectComponent implements OnInit {
  chargerList: Charger[];
  selectedOption: number;
  @Input() selected: Charger[];
  @Output() selection: EventEmitter<Charger[]> = new EventEmitter<Charger[]>();


  constructor(private service: ChargeService) {
  }

  ngOnInit() {
    this.chargerList = [];
    if (isNullOrUndefined(this.selected)) {
      this.selected = [];
    }
    this.getChargers();
  }

  getChargers() {
    this.service.getChargers().subscribe(chs => {
      // chs.forEach(ch => {
      //   if (typeof (ch.location) !== 'object') {
      //      this.chargerList.push(ch);
      //   }
      // });
      this.chargerList = chs;
    });
  }

  add() {
    const charger = this.chargerList.splice(this.selectedOption, 1);
    this.selected.push(charger[0]);
    this.selection.emit(this.selected);
  }

  remove(index) {
    const charger = this.selected.splice(index, 1);
    this.chargerList.push(charger[0]);
    this.selection.emit(this.selected);
  }

}
