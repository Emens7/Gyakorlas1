import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titles$: Observable<Product[]> = this.productService.getAll();

  list$: Observable<Product[]> = this.productService.getAll();

  keyWord: string = "";

  key: string = 'id';

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(product: Product): void {
    if (confirm('Are sure you want to delete the user?')) {
      this.productService.delete(product.id).subscribe(
      p => this.list$ = this.productService.getAll()
    )
    }
  }

  onFilter(event: KeyboardEvent): void{
    this.keyWord= (event.target as HTMLInputElement).value
  }

  onOrder(key: string): void {
    this.key = key;
  }

}
