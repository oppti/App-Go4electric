import { Component, OnInit } from '@angular/core';
import { ChargeService } from 'src/app/services/charge.service';
import { Charger } from 'src/app/model/charger';

@Component({
  selector: 'app-charge-list',
  templateUrl: './charge-list.component.html',
  styleUrls: ['./charge-list.component.scss']
})
export class ChargeListComponent implements OnInit {

  chargerList: Charger[];

  constructor(private service: ChargeService) { }

  ngOnInit() {
    this.getCharges();
  }

  getCharges() {
    this.service.getCharges().subscribe(chargers => {
      this.chargerList = chargers;
    });
  }

}
