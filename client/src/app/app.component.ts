import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import {AuthenticationService} from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(public toastr: ToastsManager, vRef: ViewContainerRef, private auth: AuthenticationService) {
    this.toastr.setRootViewContainerRef(vRef);
  }

  ngOnInit(){
    this.auth.checkAuthenticationStatus();
  }
}
