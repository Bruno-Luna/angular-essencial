import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Injectable} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/produto"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'Fechar', {
    duration: 3000,
    horizontalPosition: "left",
    verticalPosition: "bottom"
    })    
  }

  create(produto: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, produto)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
}
