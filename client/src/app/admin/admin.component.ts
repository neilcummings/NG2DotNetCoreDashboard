import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {User} from '../_models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(users => {this.users = users});
  }

}
