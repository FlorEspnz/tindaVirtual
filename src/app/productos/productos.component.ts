import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: Product[] = [];
  searchCriteria: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  filterProducts(): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchCriteria.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchCriteria.toLowerCase())
    );
  }
}


