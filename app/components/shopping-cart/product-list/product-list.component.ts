import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productlist: Product[]=[];

  constructor(private productService : ProductService) { }

  ngOnInit():any {
    this.productService.getProducts().subscribe((products)=>{
      this.productlist=products;
    })
  }

}
