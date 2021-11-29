import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   
      let idProduct = this.route.snapshot.params['id']
      this.readIdProdct(idProduct)
  
  }

  readIdProdct(id: number){
    this.productService.readById(id).subscribe((resp: Product) =>{
      this.product = resp
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado!!')
      this.router.navigate(['/products']);
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
