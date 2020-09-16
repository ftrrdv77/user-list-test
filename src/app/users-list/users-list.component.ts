import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { User } from '../shared/user';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: User[] = [];
  inputusername: string;
  inputname: string;
  inputrole: string;


  tempValue = 0;
  selectedList: User[];
  constructor(public userService: UsersService) { }

  
  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
    }

  search(query: string) {
    this.usersList = this.userService.findUser(query);
  }

  sort(direction: string) {
    console.log(direction);
    this.usersList = this.userService.sortUsers(direction);
  }

  addUser() {
    this.userService.addUser({
      id: Math.floor((Math.random() * 20) + 10),
      name: this.inputname,
      username: this.inputusername,
      email: "",
      role: this.inputrole,
      phone: "",
      website: ""
    });
    
    this.usersList = this.userService.getUsersList();

  }

  selectItem(users: MatListOption[]) {
    this.selectedList = [];
    users.forEach(element => {
      this.selectedList.push(element.value);
    });
  }

  delUsers() {
    this.userService.delUsers(this.selectedList);


    this.usersList = this.userService.getUsersList();

  }


}
