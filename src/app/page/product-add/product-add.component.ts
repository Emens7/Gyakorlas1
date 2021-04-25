import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productAdd: Product = new Product();

  constructor(
    private productSevice: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreate(productAdd: Product ): void {
    this.productSevice.create(productAdd).subscribe(
      () => this.router.navigate([''])
    );
  }

}
