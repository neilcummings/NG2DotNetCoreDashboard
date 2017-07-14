import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user.service';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private router: Router, private userService: UserService, private toastr: ToastsManager) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.toastr.success('Registration successful');
          this.router.navigate(['/home']);
        },
        error => {
          this.toastr.error('Failed to register');
          console.log(error._body);
          this.loading = false;
        }
      )
  }

  cancel() {
    this.router.navigate(['/home']);
  }

}
