import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {
  userList: Client[];
  selectedOption: number;
  @Input() selected: Client[];
  @Output() selection: EventEmitter<Client[]> = new EventEmitter<Client[]>();

  constructor(private service: UserService) { }

  ngOnInit() {
    this.userList = [];
    if (isNullOrUndefined(this.selected)) {
      this.selected = [];
    }
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(usrs => {
      usrs.forEach(user => {
        if (user.birthday['_seconds']) {
          user.birthday = new Date(user.birthday['_seconds'] * 1000).toISOString();
        } else {
          user.birthday = null;
        }
        this.userList.push(user);
      });
    });
  }

  add() {
    const users = this.userList.splice(this.selectedOption, 1);
    this.selected.push(users[0]);
    this.selection.emit(this.selected);
  }

  remove(index) {
    const users = this.selected.splice(index, 1);
    this.userList.push(users[0]);
    this.selection.emit(this.selected);
  }

}
