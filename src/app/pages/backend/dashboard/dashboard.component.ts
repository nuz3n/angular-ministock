import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataProduct:any = [];
  dataProductAdd = {
    product_name : "",
    product_barcode:"",
    product_detail:"",
    product_price:"",
    product_qty:""
  };

  constructor(private api:ProductService, private app: AppComponent) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(){
    this.api.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.dataProduct = data;
    })
  }

  submitAddProduct(){
    // this.api.createProduct(this.dataProductAdd).subscribe((data:{})=>{
    //   this.fetchProduct();
      this.clearDataProduct();
      $("#modalAdd").modal('hide');
    // })
  }

  viewProduct(id){
    this.app.openSweetAlertCst();
  }

  editProduct(id){
    alert(id);
  }

  deleteProduct(id){

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
      }
    })

    // swal({
    //   type:'warning',
    //   title: 'Are you sure to Delete Staff?',
    //   text: 'You will not be able to recover the data of Staff',
    //   showCancelButton: true,
    //   confirmButtonColor: '#049F0C',
    //   cancelButtonColor:'#ff0000',
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'No, keep it'
    // }).then(() => {
    // this.dataService.deleteStaff(staffId).subscribe(
    //   data => {
    //     if (data.hasOwnProperty('error')) {
    //       this.alertService.error(data.error);
    //     } else if (data.status) {
    //       swal({
    //         type:'success',
    //         title: 'Deleted!',
    //         text: 'The Staff has been deleted.',              
    //       })
    //     }
    //   }, error => {
    //     this.alertService.error(error);
    //   });
    // }, (dismiss) => {
    //   // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
    //   if (dismiss === 'cancel') {
    //     swal({
    //       type:'info',
    //       title: 'Cancelled',
    //       text: 'Your Staff file is safe :)'
    //     })
    //   }
    // });
  }

  clearDataProduct(){
    this.dataProductAdd = {
      product_name : "",
      product_barcode:"",
      product_detail:"",
      product_price:"",
      product_qty:""
    };
  }
}
