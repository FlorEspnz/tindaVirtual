import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const products: Product[] = [
      { id: 1, name: 'Producto 1', category: 'Categoría 1', price: 100, imageUrl: 'assets/producto1.jpg', description: 'Descripción del producto 1' },
      { id: 2, name: 'Producto 2', category: 'Categoría 2', price: 150, imageUrl: 'assets/producto2.jpg', description: 'Descripción del producto 2' },
      { id: 3, name: 'Producto 3', category: 'Categoría 2', price: 150, imageUrl: 'assets/producto3.jpg', description: 'Descripción del producto 3' },
      { id: 4, name: 'Producto 4', category: 'Categoría 2', price: 150, imageUrl: 'assets/producto4.jpg', description: 'Descripción del producto 4' },
      { id: 5, name: 'Producto 5', category: 'Categoría 2', price: 150, imageUrl: 'assets/producto5.jpg', description: 'Descripción del producto 5' },
      { id: 6, name: 'Producto 6', category: 'Categoría 2', price: 150, imageUrl: 'assets/product6.jpg',  description: 'Descripción del producto 6' },
      // Agrega más productos según sea necesario
    ];
    return of(products);
  }
}


