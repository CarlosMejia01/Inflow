import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class ToastAlertService {

  constructor(private toastr: ToastrService) {
  }

  showSuccess(message: string) {
    this.toastr.success(`${message}`, 'Success', { positionClass: 'toast-bottom-left' })
  }

  showError(nameError: string) {
    this.toastr.error(`${nameError}`, 'Error', { positionClass: 'toast-bottom-left' })
  }
}
