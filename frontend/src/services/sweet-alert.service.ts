import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() {
  }

  async showProductAlert(messsage: string): Promise<boolean> {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: messsage === "update" ? "btn btn-warning" : "btn btn-danger",
        cancelButton: "btn btn-secondary",
      },
      buttonsStyling: false
    });
    return await swalWithBootstrapButtons.fire({
      title: `Are you sure to ${messsage.toLowerCase()} the product?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: `Yes, ${messsage.toLowerCase()} it!`,
      cancelButtonText: "No, cancel!",
    }).then(result => {
      if (result.dismiss) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          icon: "error"
        });
      }
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: `${messsage.toUpperCase()}D!`,
          text: "The product has been update.",
          icon: "success"
        });
      }
      return result.isConfirmed;
    })
  }
}
