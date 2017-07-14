import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {User} from '../_models/user';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  users: User[] = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(users => {this.users = users});
  }


}
