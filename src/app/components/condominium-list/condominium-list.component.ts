import { Component, OnInit } from '@angular/core';
import { CondominiumService } from 'src/app/services/condominium.service';

@Component({
  selector: 'app-condominium-list',
  templateUrl: './condominium-list.component.html',
  styleUrls: ['./condominium-list.component.scss']
})
export class CondominiumListComponent implements OnInit {
  condoList = [];

  constructor(private service: CondominiumService) { }

  ngOnInit() {
    this.getCondoms();
  }

  getCondoms() {
    this.service.getAll().subscribe(condos => {
      this.condoList = condos;
    });
  }
}
