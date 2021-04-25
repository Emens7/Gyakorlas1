import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/model/product';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  product$: Observable<Product> = this.activateRoute.params.pipe(
    switchMap(params => this.productService.get(params.id))
  )

  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      p => this.router.navigate(['/'])
    )
  }

}


