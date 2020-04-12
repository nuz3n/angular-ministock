import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataProduct:any = [];
  constructor(private api:ProductService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.dataProduct = data;
    })
  }

}
