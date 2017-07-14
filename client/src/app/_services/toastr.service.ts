import { Injectable } from '@angular/core';
import {ToastOptions, ToastsManager} from 'ng2-toastr';

@Injectable()
export class ToastrService {

  constructor(private toastr: ToastsManager, private toastOpts: ToastOptions) {
    this.toastOpts.positionClass = 'toast-bottom-right';
  }

  success(message: string) {
    this.toastr.success(message);
  }

  info(message: string) {
    this.toastr.info(message);
  }

  warning(message: string) {
    this.toastr.warning(message);
  }

  error(message: string) {
    this.toastr.error(message);
  }

}
