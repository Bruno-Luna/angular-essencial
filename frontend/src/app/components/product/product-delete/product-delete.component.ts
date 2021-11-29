import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService

  ) { }

  ngOnInit(){

    let idProduct = this.route.snapshot.params['id']

    this.readIdProduct(idProduct)
    
  }


  readIdProduct(id: number){
    this.productService.readById(id).subscribe((resp: Product) => {
      this.product = resp
    })
  }

  deleteProduct(){
    console.log(this.product.id);
    
    this.productService.delete(this.product.id).subscribe(() =>{
      this.productService.showMessage('Produto deletado!')
      this.router.navigate(['/products'])
    })
    
  }

  cancel(){
    this.router.navigate(['/products'])
  }
}
