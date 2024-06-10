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
      { id: 1, name: 'CORREA', category: 'Categoría 1', price: 3000, imageUrl: 'assets/producto 1.jpg', description: 'correa gris' },
      { id: 2, name: 'CORREA', category: 'Categoría 2', price: 3000, imageUrl: 'assets/producto 2.jpg', description: 'correa stitch' },
      { id: 3, name: 'COLLAR', category: 'Categoría 2', price: 2000, imageUrl: 'assets/producto 3.jpg', description: 'collar stitch' },
      { id: 4, name: 'CORREA', category: 'Categoría 2', price: 3000, imageUrl: 'assets/producto 4.jpg', description: 'correa pixar' },
      { id: 5, name: 'ARNES Y CORREA', category: 'Categoría 2', price: 5000, imageUrl: 'assets/producto 5.jpg', description: 'arnes y correa rosa' },
      { id: 6, name: 'JUGUETE', category: 'Categoría 2', price: 3500, imageUrl: 'assets/producto 7.jpg',  description: 'juguete para gatos' },
      // Agrega más productos según sea necesario
    ];
    return of(products);
  }
}


