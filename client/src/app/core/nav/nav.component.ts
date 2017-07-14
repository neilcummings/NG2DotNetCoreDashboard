import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {ToastrService} from '../../_services/toastr.service';

@Component({
  selector: 'cr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isIn = false;

  toggleState() {
    this.isIn = !this.isIn
  }

  constructor(private auth: AuthenticationService, private toastr: ToastrService) {
  }

  ngOnInit() {
    console.log(this.auth.currentUser);
  }

  login(formvalues) {
    console.log(formvalues);
    this.auth.login(formvalues.username, formvalues.password)
      .subscribe(data => {
          this.toastr.success('Logged into App');
        },
        error => {
          this.toastr.error('Failed to log in');
          console.log(error._body);
        });
  }

  logout() {
    this.toastr.success('Logged out');
    this.auth.logout();
  }

}
